import os
import re

os.environ.setdefault("DJANGO_ALLOW_ASYNC_UNSAFE", "true")

import pytest
from django.core.management import call_command
from playwright.sync_api import Page, expect


pytestmark = [pytest.mark.django_db(transaction=True), pytest.mark.e2e]


DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))


@pytest.fixture(scope="function", autouse=True)
def seeded_catalog():
    call_command("seed_peptides", data_dir=DATA_DIR, verbosity=0)


def open_home(page: Page, live_server):
    page.goto(live_server.url + "/")
    expect(page.locator(".card").first).to_be_visible()
    expect(page.locator("#countDisplay")).to_have_text("129")


def test_home_search_filters_and_opens_new_peptide_modal(page: Page, live_server):
    open_home(page, live_server)

    page.locator("#searchInput").fill("setmelanotide")
    expect(page.locator("#countDisplay")).to_have_text("1")
    expect(page.locator(".card-title")).to_have_text("Setmelanotide")

    page.locator(".card").click()
    expect(page.locator("#modalOverlay")).to_have_class(re.compile(r".*active.*"))
    expect(page.locator(".modal-title")).to_have_text("Setmelanotide")
    expect(page.locator("#modalContent")).to_contain_text("MC4R")
    expect(page).to_have_url(re.compile(r"/#setmelanotide$"))

    page.keyboard.press("Escape")
    expect(page.locator("#modalOverlay")).not_to_have_class(re.compile(r".*active.*"))


def test_peptide_modal_can_reopen_after_close(page: Page, live_server):
    open_home(page, live_server)

    page.locator(".card").nth(0).click()
    expect(page.locator(".modal-title")).to_have_text("Semaglutide")
    expect(page.locator("#modalOverlay")).to_have_css("opacity", "1")

    page.keyboard.press("Escape")
    expect(page.locator("#modalOverlay")).not_to_have_class(re.compile(r".*active.*"))

    page.locator(".card").nth(1).click()
    expect(page.locator(".modal-title")).to_have_text("Tirzepatide")
    expect(page.locator("#modalOverlay")).to_have_css("opacity", "1")

    page.locator("#modalClose").click()
    expect(page.locator("#modalOverlay")).not_to_have_class(re.compile(r".*active.*"))

    page.locator(".card").nth(2).click()
    expect(page.locator(".modal-title")).to_have_text("Retatrutide")
    expect(page.locator("#modalOverlay")).to_have_css("opacity", "1")


def test_category_filter_limits_peptide_cards(page: Page, live_server):
    open_home(page, live_server)

    page.locator('[data-category="healing"]').click()
    expect(page.locator("#countDisplay")).to_have_text("13")
    expect(page.locator(".card-title").filter(has_text="Teduglutide")).to_be_visible()
    expect(page.locator(".card-title").filter(has_text="Setmelanotide")).to_have_count(0)


def test_load_more_and_empty_search_state_are_stable(page: Page, live_server):
    open_home(page, live_server)

    expect(page.locator(".card")).to_have_count(12)
    page.locator("#loadMorePeptides").click()
    expect(page.locator(".card")).to_have_count(24)

    page.locator("#searchInput").fill("resultado impossivel de existir")
    expect(page.locator("#countDisplay")).to_have_text("0")
    expect(page.locator(".no-results")).to_contain_text("Nenhum peptídeo encontrado")

    page.locator("#searchInput").clear()
    expect(page.locator("#countDisplay")).to_have_text("129")
    expect(page.locator(".card")).to_have_count(12)


def test_stacks_search_and_new_stack_modal(page: Page, live_server):
    open_home(page, live_server)

    page.locator('[data-section="stacks"]').click()
    expect(page.locator("#stacksContainer")).to_be_visible()
    expect(page.locator(".stack-card").first).to_be_visible()
    expect(page.locator("#peptideFiltersBar")).to_be_hidden()
    expect(page.locator("#stackCountDisplay")).to_have_text("46")
    expect(page.locator('[data-section="stacks"]')).to_have_attribute("aria-pressed", "true")

    page.locator("#searchInput").fill("MASH")
    expect(page.locator(".stack-card-name").filter(has_text="MASH/NASH - Eixo FGF21")).to_be_visible()
    expect(page.locator(".stack-peptide-chip").filter(has_text="Pegozafermin")).to_be_visible()
    expect(page.locator(".stack-peptide-chip").filter(has_text="Efruxifermin")).to_be_visible()

    page.locator(".stack-card").filter(has_text="MASH/NASH - Eixo FGF21").click()
    expect(page.locator(".modal-title")).to_have_text("MASH/NASH - Eixo FGF21 + Proteção Hepática")
    expect(page.locator("#modalContent")).to_contain_text("Escolher UM análogo FGF21")
    expect(page).to_have_url(re.compile(r"/#stack-metabolic-mash-fgf21$"))


def test_stack_cards_have_consistent_size_and_goal_colors(page: Page, live_server):
    open_home(page, live_server)

    page.locator('[data-section="stacks"]').click()
    expect(page.locator(".stack-card").nth(2)).to_be_visible()

    heights = page.locator(".stack-card").evaluate_all(
        "cards => cards.slice(0, 3).map(card => Math.round(card.getBoundingClientRect().height))"
    )
    assert max(heights) - min(heights) <= 1

    weight_loss_accent = page.locator(".stack-card").first.evaluate(
        "card => getComputedStyle(card).getPropertyValue('--card-accent').trim()"
    )
    page.locator('[data-goal="healing"]').click()
    expect(page.locator(".stack-card").first).to_be_visible()
    healing_accent = page.locator(".stack-card").first.evaluate(
        "card => getComputedStyle(card).getPropertyValue('--card-accent').trim()"
    )

    assert weight_loss_accent != healing_accent


def test_stack_to_peptide_back_navigation(page: Page, live_server):
    open_home(page, live_server)

    page.locator('[data-section="stacks"]').click()
    page.locator("#searchInput").fill("Intestino Curto")
    page.locator(".stack-card").filter(has_text="Intestino Curto").click()

    expect(page.locator(".modal-title")).to_have_text("Intestino Curto - Adaptação Intestinal + Reparo de Mucosa")
    page.locator(".peptide-link").filter(has_text="Teduglutide").click()

    expect(page.locator(".modal-title")).to_have_text("Teduglutide")
    expect(page.locator(".modal-back")).to_contain_text("Voltar para Intestino Curto")
    page.locator(".modal-back a").click()
    expect(page.locator(".modal-title")).to_have_text("Intestino Curto - Adaptação Intestinal + Reparo de Mucosa")


def test_deep_links_open_peptide_and_stack_modals(page: Page, live_server):
    page.goto(live_server.url + "/#teduglutide")
    expect(page.locator(".modal-title")).to_have_text("Teduglutide")
    expect(page.locator("#modalContent")).to_contain_text("GLP-2")

    page.goto("about:blank")
    page.goto(live_server.url + "/#stack-genetic-obesity-mc4r-support")
    expect(page.locator(".modal-title")).to_have_text("Obesidade Genética Rara - MC4R + Suporte Metabólico")
    expect(page.locator("#modalContent")).to_contain_text("Setmelanotide")


def test_detail_pages_render_and_mobile_home_is_usable(page: Page, live_server):
    page.goto(live_server.url + "/peptideos/efruxifermin/")
    expect(page).to_have_title("Efruxifermin (EFX, AKR-001) - Dosagem, Efeitos e Estudos | Guia de Peptídeos")
    expect(page.locator("body")).to_contain_text("Efruxifermin")

    page.goto(live_server.url + "/combinacoes/metabolic-mash-fgf21/")
    expect(page).to_have_title("MASH/NASH - Eixo FGF21 + Proteção Hepática - Protocolo Completo | Guia de Peptídeos")
    expect(page.locator("body")).to_contain_text("Pegozafermin")

    page.set_viewport_size({"width": 390, "height": 844})
    page.goto(live_server.url + "/")
    expect(page.locator("#searchInput")).to_be_visible()
    page.locator("#searchInput").fill("Gattex")
    expect(page.locator("#countDisplay")).to_have_text("1")


def test_theme_toggle_switches_and_header_is_readable(page: Page, live_server):
    page.goto(live_server.url + "/")
    expect(page.locator(".card").first).to_be_visible()

    # Default theme should be dark (light text on dark bg)
    theme = page.evaluate("document.documentElement.getAttribute('data-theme')")
    assert theme in ("dark", "light"), "data-theme should be set"

    # Click theme toggle
    page.locator("#themeToggle").click()
    new_theme = page.evaluate("document.documentElement.getAttribute('data-theme')")
    assert new_theme != theme, "Theme should switch after click"

    # Verify header text is readable in both themes
    # Get computed color of header brand text and header background
    header_bg = page.evaluate(
        "window.getComputedStyle(document.querySelector('.header')).backgroundColor"
    )
    header_text_color = page.evaluate(
        "window.getComputedStyle(document.querySelector('.header-brand h1')).color"
    )

    # Colors must be defined (not empty/transparent for text)
    assert header_text_color and header_text_color != "rgba(0, 0, 0, 0)", "Header text color must be defined"
    assert header_bg and header_bg != "rgba(0, 0, 0, 0)", "Header background must be defined"

    # Toggle back
    page.locator("#themeToggle").click()
    final_theme = page.evaluate("document.documentElement.getAttribute('data-theme')")
    assert final_theme == theme, "Theme should toggle back"


def test_peptide_cards_are_semantic_buttons(page: Page, live_server):
    """Cards must be <button> elements for keyboard accessibility."""
    open_home(page, live_server)
    first_card = page.locator("#cardsContainer .card").first
    expect(first_card).to_have_js_property("tagName", "BUTTON")
    expect(first_card).to_have_attribute("type", "button")


def test_stack_cards_are_semantic_buttons(page: Page, live_server):
    """Stack cards must also be <button> elements."""
    open_home(page, live_server)
    page.locator('[data-section="stacks"]').click()
    expect(page.locator(".stack-card").first).to_be_visible()
    first_stack = page.locator("#stacksGrid .stack-card").first
    expect(first_stack).to_have_js_property("tagName", "BUTTON")
    expect(first_stack).to_have_attribute("type", "button")


def test_mobile_menu_toggle(page: Page, live_server):
    """Hamburger menu opens/closes the nav and updates ARIA attributes."""
    page.set_viewport_size({"width": 390, "height": 844})
    open_home(page, live_server)

    menu_toggle = page.locator("#menuToggle")
    # Wait for the nav element to exist in the DOM
    page.wait_for_selector("#headerNav", state="attached")
    header_nav = page.locator("#headerNav")

    # Menu toggle is visible in mobile
    expect(menu_toggle).to_be_visible()
    # Nav is hidden by default in mobile (CSS display:none)
    expect(header_nav).to_be_hidden()

    # Click to open
    menu_toggle.click()
    # After click, nav should become visible
    expect(header_nav).to_be_visible()
    expect(menu_toggle).to_have_attribute("aria-expanded", "true")

    # Click menu toggle again to close
    menu_toggle.click()
    expect(header_nav).to_be_hidden()
    expect(menu_toggle).to_have_attribute("aria-expanded", "false")


def test_modal_has_dialog_role_and_aria_attributes(page: Page, live_server):
    """Modal overlay must have proper ARIA attributes for screen readers."""
    open_home(page, live_server)
    page.locator(".card").first.click()

    modal = page.locator("#modalOverlay")
    expect(modal).to_have_attribute("role", "dialog")
    expect(modal).to_have_attribute("aria-modal", "true")
    expect(modal).to_have_attribute("aria-labelledby", "modalTitle")

    # Modal title element must exist
    expect(page.locator("#modalTitle")).to_be_visible()


def test_modal_traps_focus(page: Page, live_server):
    """Tabbing inside the modal should cycle focus between first and last elements."""
    open_home(page, live_server)
    page.locator(".card").first.click()

    # Focus should start on the close button (first focusable element)
    active = page.evaluate("() => document.activeElement.id")
    assert active == "modalClose", f"Expected focus on modalClose, got {active}"

    # Tab to the last focusable element (could be a link inside modal content)
    # We simulate enough Tab presses to reach the end and verify wrap-around
    # by checking that Shift+Tab from first element goes to last.
    # Simpler test: press Tab many times and ensure focus never leaves modal.
    for _ in range(20):
        page.keyboard.press("Tab")
        active = page.evaluate("() => document.activeElement.id")
        # Focus must stay inside the modal overlay (either an element inside it,
        # or the modal itself which has tabindex=-1)
        is_inside = page.evaluate(
            f"() => document.getElementById('modalOverlay').contains(document.getElementById('{active}'))"
        ) if active else False
        if not is_inside and active != "modalOverlay":
            # Some active elements may not have an id; check via contains
            is_inside = page.evaluate(
                "() => document.getElementById('modalOverlay').contains(document.activeElement)"
            )
        assert is_inside, f"Focus escaped modal to element: {active}"


def test_search_results_announced_to_screen_readers(page: Page, live_server):
    """The results counter must have aria-live for screen reader announcements."""
    open_home(page, live_server)
    results_counter = page.locator(".results-count").first
    expect(results_counter).to_have_attribute("aria-live", "polite")
    expect(results_counter).to_have_attribute("aria-atomic", "true")
