import os
from pathlib import Path

os.environ.setdefault("DJANGO_ALLOW_ASYNC_UNSAFE", "true")

import pytest
from django.core.management import call_command
from playwright.sync_api import Page, expect


pytestmark = [pytest.mark.django_db(transaction=True), pytest.mark.e2e]


DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 1000},
    "mobile": {"width": 390, "height": 844},
}


@pytest.fixture(scope="function", autouse=True)
def seeded_catalog():
    call_command("seed_peptides", data_dir=DATA_DIR, verbosity=0)


@pytest.fixture()
def snapshot_dir(tmp_path):
    configured = os.environ.get("VISUAL_SNAPSHOT_DIR")
    path = Path(configured) if configured else tmp_path / "visual"
    path.mkdir(parents=True, exist_ok=True)
    return path


def _open_home(page: Page, live_server):
    page.goto(live_server.url + "/", wait_until="networkidle")
    expect(page.locator(".card").first).to_be_visible()
    expect(page.locator("#countDisplay")).to_have_text("129")


def _capture(page: Page, snapshot_dir: Path, name: str):
    page.screenshot(path=str(snapshot_dir / f"{name}.png"), full_page=True, animations="disabled")


def _assert_no_horizontal_overflow(page: Page):
    overflow = page.evaluate(
        """() => Math.max(
            document.documentElement.scrollWidth - document.documentElement.clientWidth,
            document.body.scrollWidth - document.body.clientWidth
        )"""
    )
    assert overflow <= 1, f"Horizontal overflow detected: {overflow}px"


def _assert_element_inside_viewport(page: Page, selector: str):
    box = page.locator(selector).first.bounding_box()
    viewport = page.viewport_size
    assert box is not None, f"{selector} has no bounding box"
    assert viewport is not None, "Viewport size unavailable"
    assert box["x"] >= -1, f"{selector} starts outside the viewport: {box}"
    assert box["x"] + box["width"] <= viewport["width"] + 1, f"{selector} exceeds viewport width: {box}"


def _assert_vertical_order(page: Page, selectors: list[str]):
    positions = page.evaluate(
        """selectors => selectors.map(selector => {
            const element = document.querySelector(selector);
            if (!element) return null;
            const rect = element.getBoundingClientRect();
            return { selector, top: rect.top + window.scrollY };
        })""",
        selectors,
    )
    missing = [item for item in positions if item is None]
    assert not missing, f"Missing selectors in visual order check: {missing}"

    tops = [item["top"] for item in positions]
    assert tops == sorted(tops), f"Unexpected vertical order: {positions}"


def _assert_grid_row_consistency(page: Page, selector: str, expected_min: int):
    boxes = page.locator(selector).evaluate_all(
        """elements => elements.slice(0, 8).map(element => {
            const rect = element.getBoundingClientRect();
            return {
                x: Math.round(rect.x),
                y: Math.round(rect.y),
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            };
        })"""
    )
    assert len(boxes) >= expected_min, f"Expected at least {expected_min} items for {selector}, got {len(boxes)}"

    first_row_y = boxes[0]["y"]
    first_row = [box for box in boxes if abs(box["y"] - first_row_y) <= 2]
    if len(first_row) > 1:
        widths = [box["width"] for box in first_row]
        heights = [box["height"] for box in first_row]
        assert max(widths) - min(widths) <= 2, f"Grid widths drifted: {first_row}"
        assert max(heights) - min(heights) <= 2, f"Grid heights drifted: {first_row}"


def _assert_single_column_on_mobile(page: Page, selector: str):
    boxes = page.locator(selector).evaluate_all(
        """elements => elements.slice(0, 3).map(element => {
            const rect = element.getBoundingClientRect();
            return {
                x: Math.round(rect.x),
                y: Math.round(rect.y),
                width: Math.round(rect.width)
            };
        })"""
    )
    assert len(boxes) >= 3
    x_positions = {box["x"] for box in boxes}
    assert len(x_positions) == 1, f"Expected a single mobile column, got boxes: {boxes}"


def _assert_controls_do_not_clip_text(page: Page):
    clipped = page.evaluate(
        """() => Array.from(document.querySelectorAll(
            '.section-tab, .theme-toggle, .menu-toggle, .hero-cta, .load-more-btn'
        ))
        .filter(element => {
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden') {
                return false;
            }
            return element.scrollWidth - element.clientWidth > 1 || element.scrollHeight - element.clientHeight > 1;
        })
        .map(element => ({
            selector: element.id ? `#${element.id}` : element.className,
            text: element.innerText,
            scrollWidth: element.scrollWidth,
            clientWidth: element.clientWidth,
            scrollHeight: element.scrollHeight,
            clientHeight: element.clientHeight
        }))"""
    )
    assert clipped == [], f"Visible controls are clipping text: {clipped}"


def test_home_visual_layout_desktop_and_mobile(page: Page, live_server, snapshot_dir):
    for viewport_name, viewport in VIEWPORTS.items():
        page.set_viewport_size(viewport)
        _open_home(page, live_server)

        _assert_no_horizontal_overflow(page)
        _assert_element_inside_viewport(page, ".header")
        _assert_element_inside_viewport(page, ".search-section")
        _assert_vertical_order(page, [".header", ".hero", ".stats-bar", ".search-section", "#peptideFiltersBar", "#cardsContainer"])
        _assert_controls_do_not_clip_text(page)

        if viewport_name == "desktop":
            _assert_grid_row_consistency(page, "#cardsContainer .card", expected_min=6)
        else:
            _assert_single_column_on_mobile(page, "#cardsContainer .card")
            page.locator("#menuToggle").click()
            expect(page.locator("#headerNav")).to_be_visible()
            _assert_no_horizontal_overflow(page)
            _capture(page, snapshot_dir, "mobile-home-menu-open")

        _capture(page, snapshot_dir, f"{viewport_name}-home")


def test_stacks_visual_layout_desktop_and_mobile(page: Page, live_server, snapshot_dir):
    for viewport_name, viewport in VIEWPORTS.items():
        page.set_viewport_size(viewport)
        _open_home(page, live_server)
        page.locator('[data-section="stacks"]').click()
        expect(page.locator(".stack-card").first).to_be_visible()

        _assert_no_horizontal_overflow(page)
        _assert_element_inside_viewport(page, "#stacksContainer")
        _assert_controls_do_not_clip_text(page)

        if viewport_name == "desktop":
            _assert_grid_row_consistency(page, "#stacksGrid .stack-card", expected_min=6)
        else:
            _assert_single_column_on_mobile(page, "#stacksGrid .stack-card")

        _capture(page, snapshot_dir, f"{viewport_name}-stacks")


def test_modal_visual_layout_desktop_and_mobile(page: Page, live_server, snapshot_dir):
    for viewport_name, viewport in VIEWPORTS.items():
        page.set_viewport_size(viewport)
        _open_home(page, live_server)
        page.locator("#searchInput").fill("Retatrutide")
        expect(page.locator("#countDisplay")).to_have_text("1")
        page.locator(".card").first.click()
        expect(page.locator("#modalOverlay")).to_be_visible()
        expect(page.locator("#modalTitle")).to_have_text("Retatrutide")

        _assert_no_horizontal_overflow(page)
        _assert_element_inside_viewport(page, ".modal")
        _assert_element_inside_viewport(page, ".modal-close")

        modal_metrics = page.locator(".modal").evaluate(
            """element => {
                const rect = element.getBoundingClientRect();
                return {
                    top: rect.top,
                    bottom: rect.bottom,
                    height: rect.height,
                    viewportHeight: window.innerHeight
                };
            }"""
        )
        assert modal_metrics["top"] >= -1
        assert modal_metrics["height"] <= modal_metrics["viewportHeight"] + 1

        _capture(page, snapshot_dir, f"{viewport_name}-peptide-modal")
        page.keyboard.press("Escape")
        expect(page.locator("#modalOverlay")).not_to_be_visible()


def test_detail_category_and_api_visual_layouts(page: Page, live_server, snapshot_dir):
    cases = [
        ("desktop-peptide-detail", VIEWPORTS["desktop"], "/peptideos/eloralintide/", "Eloralintide"),
        ("mobile-peptide-detail", VIEWPORTS["mobile"], "/peptideos/eloralintide/", "Eloralintide"),
        ("desktop-stack-detail", VIEWPORTS["desktop"], "/combinacoes/gh-long-acting-options/", "Lonapegsomatropin"),
        ("mobile-stack-detail", VIEWPORTS["mobile"], "/combinacoes/gh-long-acting-options/", "Lonapegsomatropin"),
        ("desktop-category", VIEWPORTS["desktop"], "/categorias/weight-loss/", "Perda de Peso"),
        ("mobile-category", VIEWPORTS["mobile"], "/categorias/weight-loss/", "Perda de Peso"),
        ("desktop-api-page", VIEWPORTS["desktop"], "/api/peptides.json", "API JSON"),
        ("mobile-api-page", VIEWPORTS["mobile"], "/api/peptides.json", "API JSON"),
    ]

    for name, viewport, path, marker in cases:
        page.set_viewport_size(viewport)
        page.goto(live_server.url + path, wait_until="networkidle")
        expect(page.locator("body")).to_contain_text(marker)

        _assert_no_horizontal_overflow(page)
        _assert_element_inside_viewport(page, ".header")
        _assert_element_inside_viewport(page, ".detail-page")
        _assert_controls_do_not_clip_text(page)
        _capture(page, snapshot_dir, name)
