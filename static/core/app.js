function getBootstrappedPeptides() {
    var bootstrapped = [];
    if (typeof peptidesPart1 !== "undefined") {
        bootstrapped = bootstrapped.concat(peptidesPart1);
    }
    if (typeof peptidesPart2 !== "undefined") {
        bootstrapped = bootstrapped.concat(peptidesPart2);
    }
    if (typeof peptidesPart3 !== "undefined") {
        bootstrapped = bootstrapped.concat(peptidesPart3);
    }
    return bootstrapped;
}

function getBootstrappedStacks() {
    return (typeof peptideStacks !== "undefined") ? peptideStacks : [];
}

var peptides = getBootstrappedPeptides();
var stacks = getBootstrappedStacks();
var bootstrapDataPresent =
    typeof peptidesPart1 !== "undefined" ||
    typeof peptidesPart2 !== "undefined" ||
    typeof peptidesPart3 !== "undefined" ||
    typeof peptideStacks !== "undefined";

// State
var currentCategory = "all";
var currentSearch = "";
var currentSection = "peptides";
var currentStackGoal = "all";
var sourceStackId = null;
var searchDebounceTimer = null;
var dataLoaded = bootstrapDataPresent;
var dataLoadFailed = false;

// DOM elements
var cardsContainer = document.getElementById("cardsContainer");
var stacksContainer = document.getElementById("stacksContainer");
var stacksGrid = document.getElementById("stacksGrid");
var searchInput = document.getElementById("searchInput");
var countDisplay = document.getElementById("countDisplay");
var stackCountDisplay = document.getElementById("stackCountDisplay");
var peptideFiltersBar = document.getElementById("peptideFiltersBar");
var modalOverlay = document.getElementById("modalOverlay");
var modalContent = document.getElementById("modalContent");
var modalClose = document.getElementById("modalClose");
var modalLastFocused = null;
var modalTrapHandler = null;
var filterButtons = document.querySelectorAll(".filters-scroll .filter-chip");
var sectionButtons = document.querySelectorAll(".section-tab");
var stackFilterButtons = document.querySelectorAll("#stacksFilters .filter-chip");
var themeToggle = document.getElementById("themeToggle");
var themeIcon = document.getElementById("themeIcon");
var themeLabel = document.getElementById("themeLabel");
var mainHeader = document.getElementById("mainHeader");
var scrollProgress = document.getElementById("scrollProgress");

var peptidesPageSize = 12;
var peptidesVisibleCount = 12;
var stacksPageSize = 12;
var stacksVisibleCount = 12;

function buildStateMessage(title, text, isError) {
    var className = isError ? "loading-state error-state" : "loading-state";
    return '<div class="' + className + '"><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(text) + '</p></div>';
}

function escapeHtml(value) {
    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeJsString(value) {
    return String(value == null ? "" : value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/\r/g, "\\r")
        .replace(/\n/g, "\\n");
}

function safeClassToken(value) {
    return String(value == null ? "" : value).replace(/[^a-zA-Z0-9_-]/g, "");
}

function withSitePath(path) {
    var prefix = (window.sitePathPrefix || "").replace(/\/$/, "");
    if (!path || path.charAt(0) !== "/" || path.indexOf("//") === 0) {
        return path || "";
    }
    if (prefix && path.indexOf(prefix + "/") === 0) {
        return path;
    }
    return prefix + path;
}

function sanitizeReferenceHtml(value) {
    var template = document.createElement("template");
    template.innerHTML = String(value == null ? "" : value);

    function appendCleanChildren(source, target) {
        Array.prototype.forEach.call(source.childNodes, function(child) {
            var cleaned = cleanNode(child);
            if (cleaned) {
                target.appendChild(cleaned);
            }
        });
    }

    function isAllowedHref(href) {
        try {
            var url = new URL(href, window.location.href);
            return ["http:", "https:", "mailto:", "tel:"].indexOf(url.protocol) !== -1;
        } catch (e) {
            return false;
        }
    }

    function cleanNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            return document.createTextNode(node.textContent || "");
        }
        if (node.nodeType !== Node.ELEMENT_NODE) {
            return null;
        }

        var tag = node.tagName.toLowerCase();
        if (tag === "br") {
            return document.createElement("br");
        }
        if (tag === "strong" || tag === "em") {
            var formatted = document.createElement(tag);
            appendCleanChildren(node, formatted);
            return formatted;
        }
        if (tag === "a") {
            var href = node.getAttribute("href") || "";
            if (!isAllowedHref(href)) {
                var fallback = document.createDocumentFragment();
                appendCleanChildren(node, fallback);
                return fallback;
            }
            var link = document.createElement("a");
            link.href = href;
            if (node.getAttribute("title")) {
                link.title = node.getAttribute("title");
            }
            if (node.getAttribute("target") === "_blank") {
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            }
            appendCleanChildren(node, link);
            return link;
        }

        var fragment = document.createDocumentFragment();
        appendCleanChildren(node, fragment);
        return fragment;
    }

    var wrapper = document.createElement("span");
    appendCleanChildren(template.content, wrapper);
    return wrapper.innerHTML;
}

function initTheme() {
    var saved = localStorage.getItem('peptides-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeUI(theme);
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            var current = document.documentElement.getAttribute('data-theme') || 'light';
            var next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('peptides-theme', next);
            updateThemeUI(next);
        });
    }
}

function updateThemeUI(theme) {
    if (!themeIcon || !themeLabel) return;
    if (theme === 'dark') {
        themeIcon.innerHTML = '\u2600';
        themeLabel.textContent = 'Claro';
    } else {
        themeIcon.innerHTML = '\uD83C\uDF19';
        themeLabel.textContent = 'Escuro';
    }
}

function updateScrollProgress() {
    if (!scrollProgress) return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = percent + '%';
}

function updateHeaderScroll() {
    if (!mainHeader) return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 60) {
        mainHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
    }
}

function onScroll() {
    updateScrollProgress();
    updateHeaderScroll();
}

function renderCurrentSection() {
    if (currentSection === "peptides") {
        renderCards();
    } else {
        renderStacks();
    }
}

function addApiCandidate(candidates, url) {
    if (!url || candidates.indexOf(url) !== -1) {
        return;
    }
    candidates.push(url);
}

function buildApiCandidates() {
    var candidates = [];
    var configuredCandidates = window.peptidesApiCandidates || [];
    var origin = window.location.origin || "";
    var pathname = window.location.pathname || "/";

    configuredCandidates.forEach(function(url) {
        addApiCandidate(candidates, url);
    });

    if (pathname === "/peptides" || pathname.indexOf("/peptides/") === 0) {
        addApiCandidate(candidates, "/peptides/api/v1/peptides.json");
        addApiCandidate(candidates, "/peptides/api/peptides.json");
        if (origin) {
            addApiCandidate(candidates, origin + "/peptides/api/v1/peptides.json");
            addApiCandidate(candidates, origin + "/peptides/api/peptides.json");
        }
    }

    addApiCandidate(candidates, "/api/v1/peptides.json");
    addApiCandidate(candidates, "/api/peptides.json");
    if (origin) {
        addApiCandidate(candidates, origin + "/api/v1/peptides.json");
        addApiCandidate(candidates, origin + "/api/peptides.json");
    }

    addApiCandidate(candidates, "https://guiadepeptideos.com.br/peptides/api/v1/peptides.json");
    addApiCandidate(candidates, "https://guiadepeptideos.com.br/peptides/api/peptides.json");
    addApiCandidate(candidates, "https://guiadepeptideos.com.br/api/v1/peptides.json");
    addApiCandidate(candidates, "https://guiadepeptideos.com.br/api/peptides.json");
    addApiCandidate(candidates, "https://mlt.com.br/peptides/api/v1/peptides.json");
    addApiCandidate(candidates, "https://mlt.com.br/peptides/api/peptides.json");

    return candidates;
}

function isValidApiPayload(data) {
    return !!data && typeof data === "object" && Array.isArray(data.peptides) && Array.isArray(data.stacks);
}

function fetchApiCandidate(url) {
    return fetch(url, {
        headers: { "Accept": "application/json" },
        cache: "no-store"
    })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Failed to load peptide data");
            }
            return response.json();
        })
        .then(function(data) {
            if (!isValidApiPayload(data)) {
                throw new Error("Invalid peptide payload");
            }
            return data;
        });
}

function loadDataFromCandidates(candidates, index) {
    if (index >= candidates.length) {
        return Promise.reject(new Error("Failed to load peptide data"));
    }

    return fetchApiCandidate(candidates[index]).catch(function() {
        return loadDataFromCandidates(candidates, index + 1);
    });
}

function loadData() {
    if (dataLoaded) {
        return Promise.resolve();
    }

    return loadDataFromCandidates(buildApiCandidates(), 0)
        .then(function(data) {
            peptides = data.peptides || [];
            stacks = data.stacks || [];
            dataLoaded = true;
            dataLoadFailed = false;
        })
        .catch(function(error) {
            dataLoadFailed = true;
            throw error;
        });
}

// Initialize
function initMobileMenu() {
    var menuToggle = document.getElementById('menuToggle');
    var headerNav = document.getElementById('headerNav');
    if (!menuToggle || !headerNav) return;

    menuToggle.addEventListener('click', function() {
        var isOpen = headerNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // Close menu when a link is clicked
    headerNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            headerNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        });
    });
}

function init() {
    initTheme();
    initMobileMenu();
    bindEvents();
    renderCurrentSection();
    window.addEventListener('scroll', onScroll);
    onScroll();
    loadData().then(function() {
        renderCurrentSection();
        openFromHash();
    }).catch(function() {
        renderCurrentSection();
    });
}

function scheduleSectionRender() {
    window.clearTimeout(searchDebounceTimer);
    searchDebounceTimer = window.setTimeout(function() {
        peptidesVisibleCount = peptidesPageSize;
        stacksVisibleCount = stacksPageSize;
        renderCurrentSection();
    }, 200);
}

// Bind events
function bindEvents() {
    searchInput.addEventListener("input", function(e) {
        currentSearch = e.target.value.toLowerCase().trim();
        scheduleSectionRender();
    });

    filterButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            filterButtons.forEach(function(b) { b.classList.remove("active"); });
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            peptidesVisibleCount = peptidesPageSize;
            renderCards();
        });
    });

    sectionButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            sectionButtons.forEach(function(b) {
                b.classList.remove("active");
                b.setAttribute("aria-pressed", "false");
            });
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
            currentSection = btn.getAttribute("data-section");
            toggleSection();
        });
    });

    stackFilterButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            stackFilterButtons.forEach(function(b) { b.classList.remove("active"); });
            btn.classList.add("active");
            currentStackGoal = btn.getAttribute("data-goal");
            stacksVisibleCount = stacksPageSize;
            renderStacks();
        });
    });

    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", function(e) {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeModal();
    });
}

// Toggle sections
function toggleSection() {
    if (currentSection === "peptides") {
        cardsContainer.style.display = "";
        peptideFiltersBar.style.display = "";
        stacksContainer.style.display = "none";
        searchInput.placeholder = "Buscar pept\u00eddeo por nome...";
        renderCurrentSection();
    } else {
        cardsContainer.style.display = "none";
        peptideFiltersBar.style.display = "none";
        stacksContainer.style.display = "";
        searchInput.placeholder = "Buscar combina\u00e7\u00e3o ou pept\u00eddeo do stack...";
        renderCurrentSection();
    }
}

// Filter peptides
function getFilteredPeptides() {
    return peptides.filter(function(p) {
        var matchesCategory = currentCategory === "all" || p.category === currentCategory;
        var matchesSearch = !currentSearch ||
            p.name.toLowerCase().includes(currentSearch) ||
            (p.aka && p.aka.toLowerCase().includes(currentSearch)) ||
            p.description.toLowerCase().includes(currentSearch) ||
            p.categoryLabel.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });
}

// Render peptide cards
function renderCards() {
    if (dataLoadFailed) {
        countDisplay.textContent = "0";
        cardsContainer.innerHTML = buildStateMessage(
            "N\u00e3o foi poss\u00edvel carregar os pept\u00eddeos.",
            "Atualize a p\u00e1gina para tentar novamente.",
            true
        );
        return;
    }

    if (!dataLoaded) {
        countDisplay.textContent = "...";
        cardsContainer.innerHTML = buildStateMessage(
            "Carregando pept\u00eddeos...",
            "Buscando dados cient\u00edficos atualizados.",
            false
        );
        return;
    }

    var filtered = getFilteredPeptides();
    countDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
        cardsContainer.innerHTML = '<div class="no-results"><h3>Nenhum pept\u00eddeo encontrado</h3><p>Tente outro termo de busca ou categoria.</p></div>';
        return;
    }

    var visible = filtered.slice(0, peptidesVisibleCount);
    var html = "";
    visible.forEach(function(p) {
        var categoryClass = safeClassToken(p.category);
        var initials = escapeHtml(p.name.substring(0, 2).toUpperCase());
        var statusClass = p.status === "approved" ? "" : (p.status === "trial" ? "trial" : "research");
        html += '<button class="card ' + categoryClass + '" type="button" data-peptide-id="' + escapeHtml(p.id) + '">';
        html += '  <div class="card-header">';
        html += '    <div class="card-icon ' + categoryClass + '">' + initials + '</div>';
        html += '    <div class="card-title-group">';
        html += '      <div class="card-title">' + escapeHtml(p.name) + '</div>';
        if (p.aka) {
            html += '      <div class="card-aka">' + escapeHtml(p.aka) + '</div>';
        }
        html += '    </div>';
        html += '  </div>';
        html += '  <div class="card-body">';
        html += '    <p class="card-description">' + escapeHtml(p.description) + '</p>';
        html += '  </div>';
        html += '  <div class="card-tags">';
        html += '    <span class="tag tag-category">' + escapeHtml(p.categoryLabel) + '</span>';
        html += '    <span class="tag tag-status ' + statusClass + '">' + escapeHtml(p.statusLabel) + '</span>';
        html += '  </div>';
        html += '  <div class="card-footer">';
        html += '    <span>Ver detalhes completos</span>';
        html += '    <span>&rarr;</span>';
        html += '  </div>';
        html += '</button>';
    });

    if (filtered.length > peptidesVisibleCount) {
        var remaining = filtered.length - peptidesVisibleCount;
        html += '<div class="load-more-container">';
        html += '  <button class="load-more-btn" id="loadMorePeptides" type="button" data-action="load-more-peptides">';
        html += '    Carregar mais (' + remaining + ' restantes)';
        html += '  </button>';
        html += '</div>';
    }

    cardsContainer.innerHTML = html;
    bindPeptideCardActions();
}

function loadMorePeptides() {
    peptidesVisibleCount += peptidesPageSize;
    renderCards();
}

function bindPeptideCardActions() {
    cardsContainer.querySelectorAll("[data-peptide-id]").forEach(function(card) {
        card.addEventListener("click", function() {
            openModal(card.getAttribute("data-peptide-id"));
        });
    });

    var loadMoreButton = cardsContainer.querySelector('[data-action="load-more-peptides"]');
    if (loadMoreButton) {
        loadMoreButton.addEventListener("click", loadMorePeptides);
    }
}

// Filter stacks
function getFilteredStacks() {
    return stacks.filter(function(s) {
        var matchesGoal = currentStackGoal === "all" || s.goal === currentStackGoal;
        var matchesSearch = !currentSearch ||
            s.name.toLowerCase().includes(currentSearch) ||
            s.description.toLowerCase().includes(currentSearch) ||
            s.peptides.some(function(p) { return p.name.toLowerCase().includes(currentSearch); });
        return matchesGoal && matchesSearch;
    });
}

// Render stack cards
function renderStacks() {
    if (dataLoadFailed) {
        stackCountDisplay.textContent = "0";
        stacksGrid.innerHTML = buildStateMessage(
            "N\u00e3o foi poss\u00edvel carregar as combina\u00e7\u00f5es.",
            "Atualize a p\u00e1gina para tentar novamente.",
            true
        );
        return;
    }

    if (!dataLoaded) {
        stackCountDisplay.textContent = "...";
        stacksGrid.innerHTML = buildStateMessage(
            "Carregando combina\u00e7\u00f5es...",
            "Preparando os protocolos recomendados.",
            false
        );
        return;
    }

    var filtered = getFilteredStacks();
    stackCountDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
        stacksGrid.innerHTML = '<div class="no-results"><h3>Nenhuma combina\u00e7\u00e3o encontrada</h3><p>Tente outro filtro.</p></div>';
        return;
    }

    var visible = filtered.slice(0, stacksVisibleCount);
    var html = "";
    visible.forEach(function(s) {
        var goalClass = safeClassToken(s.goal);
        html += '<button class="stack-card ' + goalClass + '" type="button" data-stack-id="' + escapeHtml(s.id) + '">';
        html += '  <div class="stack-card-header ' + goalClass + '">';
        html += '    <div class="stack-card-name">' + escapeHtml(s.name) + '</div>';
        html += '    <div class="stack-card-level">' + escapeHtml(s.goalLabel) + ' \u2022 N\u00edvel: ' + escapeHtml(s.level) + '</div>';
        html += '  </div>';
        html += '  <div class="stack-card-body">';
        html += '    <p class="stack-card-desc">' + escapeHtml(s.description) + '</p>';
        html += '    <div class="stack-peptide-list">';
        s.peptides.forEach(function(p) {
            html += '      <span class="stack-peptide-chip">' + escapeHtml(p.name) + '</span>';
        });
        html += '    </div>';
        html += '  </div>';
        html += '  <div class="stack-card-footer">';
        html += '    <span>Ver protocolo completo</span>';
        html += '    <span>&rarr;</span>';
        html += '  </div>';
        html += '</button>';
    });

    if (filtered.length > stacksVisibleCount) {
        var remaining = filtered.length - stacksVisibleCount;
        html += '<div class="load-more-container">';
        html += '  <button class="load-more-btn" id="loadMoreStacks" type="button" data-action="load-more-stacks">';
        html += '    Carregar mais (' + remaining + ' restantes)';
        html += '  </button>';
        html += '</div>';
    }

    stacksGrid.innerHTML = html;
    bindStackCardActions();
}

function loadMoreStacks() {
    stacksVisibleCount += stacksPageSize;
    renderStacks();
}

function bindStackCardActions() {
    stacksGrid.querySelectorAll("[data-stack-id]").forEach(function(card) {
        card.addEventListener("click", function() {
            openStackModal(card.getAttribute("data-stack-id"));
        });
    });

    var loadMoreButton = stacksGrid.querySelector('[data-action="load-more-stacks"]');
    if (loadMoreButton) {
        loadMoreButton.addEventListener("click", loadMoreStacks);
    }
}

// Open peptide from stack (with back navigation)
function openPeptideFromStack(peptideId, stackId) {
    sourceStackId = stackId;
    openModal(peptideId);
}

// Open peptide modal
function openModal(id) {
    var p = peptides.find(function(item) { return item.id === id; });
    if (!p) return;

    var html = '';

    // Back button when coming from a stack
    if (sourceStackId) {
        var srcStack = stacks.find(function(item) { return item.id === sourceStackId; });
        if (srcStack) {
            html += '<div class="modal-back">';
            html += '  <a href="#" data-modal-stack-id="' + escapeHtml(sourceStackId) + '">&larr; Voltar para ' + escapeHtml(srcStack.name) + '</a>';
            html += '</div>';
        }
    }

    html += '<div class="modal-header">';
    html += '  <div class="modal-title" id="modalTitle">' + escapeHtml(p.name) + '</div>';
    if (p.aka) {
        html += '  <div class="modal-aka">Tamb\u00e9m conhecido como: ' + escapeHtml(p.aka) + '</div>';
    }
    html += '  <div class="modal-tags" style="margin-top:0.8rem">';
    var statusClass = p.status === "approved" ? "" : (p.status === "trial" ? "trial" : "research");
    html += '    <span class="tag tag-category">' + escapeHtml(p.categoryLabel) + '</span>';
    html += '    <span class="tag tag-status ' + statusClass + '">' + escapeHtml(p.statusLabel) + '</span>';
    html += '    <span class="tag" style="background:#f3e8ff;color:#7c3aed">Meia-vida: ' + escapeHtml(p.halfLife) + '</span>';
    html += '    <span class="tag" style="background:#ecfdf5;color:#065f46">Via: ' + escapeHtml(p.administration) + '</span>';
    html += '  </div>';
    html += '  <div style="margin-top:1rem"><a href="' + escapeHtml(withSitePath('/peptideos/' + encodeURIComponent(p.id) + '/')) + '" style="color:#3730a3;font-weight:600;text-decoration:none">Ver p\u00e1gina completa &rarr;</a></div>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Descri\u00e7\u00e3o</h3>';
    html += '  <p>' + escapeHtml(p.description) + '</p>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Mecanismo de A\u00e7\u00e3o</h3>';
    html += '  <p>' + escapeHtml(p.mechanism) + '</p>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Benef\u00edcios e Usos</h3>';
    html += '  <ul>';
    p.benefits.forEach(function(b) {
        html += '    <li>' + escapeHtml(b) + '</li>';
    });
    html += '  </ul>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Efeitos Colaterais</h3>';
    html += '  <div class="severity-legend">';
    html += '    <span><span class="severity-dot common"></span> Comum</span>';
    html += '    <span><span class="severity-dot occasional"></span> Ocasional</span>';
    html += '    <span><span class="severity-dot rare"></span> Raro</span>';
    html += '  </div>';
    p.sideEffects.forEach(function(se) {
        html += '  <div class="side-effect-item">';
        html += '    <span class="severity-dot ' + safeClassToken(se.severity) + '"></span>';
        html += '    <span>' + escapeHtml(se.name) + '</span>';
        html += '  </div>';
    });
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Dosagem Recomendada nos Estudos</h3>';
    html += '  <table class="dosage-table">';
    html += '    <thead><tr><th>Protocolo</th><th>Dosagem</th><th>Observa\u00e7\u00f5es</th></tr></thead>';
    html += '    <tbody>';
    p.dosage.forEach(function(d) {
        html += '    <tr>';
        html += '      <td><strong>' + escapeHtml(d.protocol) + '</strong></td>';
        html += '      <td>' + escapeHtml(d.dose) + '</td>';
        html += '      <td>' + escapeHtml(d.notes) + '</td>';
        html += '    </tr>';
    });
    html += '    </tbody>';
    html += '  </table>';
    html += '</div>';

    // References if available
    if (p.references && p.references.length > 0) {
        html += '<div class="modal-section">';
        html += '  <h3>Refer\u00eancias Cient\u00edficas</h3>';
        html += '  <ul>';
        p.references.forEach(function(r) {
            html += '    <li>' + sanitizeReferenceHtml(r) + '</li>';
        });
        html += '  </ul>';
        html += '</div>';
    }

    html += '<div class="warning-box">';
    html += '  <strong>AVISO IMPORTANTE:</strong> As dosagens listadas s\u00e3o baseadas em estudos cient\u00edficos publicados e servem apenas como refer\u00eancia informativa. ';
    html += '  N\u00e3o constitui recomenda\u00e7\u00e3o m\u00e9dica. Consulte sempre um profissional de sa\u00fade qualificado antes de utilizar qualquer subst\u00e2ncia.';
    html += '</div>';

    modalContent.innerHTML = html;
    bindModalActionHandlers();
    modalOverlay.style.opacity = '';
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    modalLastFocused = document.activeElement;
    enableModalTrap();
    // Move focus to the close button for screen readers
    if (modalClose) modalClose.focus();
    // SEO: update title and URL hash
    document.title = String(p.name || '') + ' - Guia de Pept\u00eddeos';
    history.replaceState(null, '', '#' + id);
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        var desc = p.name + (p.aka ? ' (' + p.aka + ')' : '') + ': ' + p.description.substring(0, 140) + '...';
        metaDesc.setAttribute('content', desc);
    }
}

// Open stack modal
function openStackModal(id) {
    sourceStackId = null;
    var s = stacks.find(function(item) { return item.id === id; });
    if (!s) return;

    var html = '';
    html += '<div class="modal-header">';
    html += '  <div class="modal-title" id="modalTitle">' + escapeHtml(s.name) + '</div>';
    html += '  <div class="modal-tags" style="margin-top:0.8rem">';
    html += '    <span class="tag tag-category">' + escapeHtml(s.goalLabel) + '</span>';
    html += '    <span class="tag" style="background:#f3e8ff;color:#7c3aed">N\u00edvel: ' + escapeHtml(s.level) + '</span>';
    html += '    <span class="tag" style="background:#ecfdf5;color:#065f46">' + escapeHtml(s.peptides.length) + ' pept\u00eddeos</span>';
    html += '  </div>';
    html += '  <div style="margin-top:1rem"><a href="' + escapeHtml(withSitePath('/combinacoes/' + encodeURIComponent(s.id) + '/')) + '" style="color:#3730a3;font-weight:600;text-decoration:none">Ver p\u00e1gina completa &rarr;</a></div>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Descri\u00e7\u00e3o do Protocolo</h3>';
    html += '  <p>' + escapeHtml(s.description) + '</p>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Pept\u00eddeos do Protocolo</h3>';
    s.peptides.forEach(function(p) {
        var hasDetail = p.id && peptides.some(function(item) { return item.id === p.id; });
        html += '  <div class="stack-peptide-detail">';
        if (hasDetail) {
            html += '    <h4><a href="#" class="peptide-link" data-modal-peptide-id="' + escapeHtml(p.id) + '" data-source-stack-id="' + escapeHtml(s.id) + '" title="Ver detalhes completos de ' + escapeHtml(p.name) + '">' + escapeHtml(p.name) + ' \u2197</a></h4>';
        } else {
            html += '    <h4>' + escapeHtml(p.name) + '</h4>';
        }
        html += '    <div class="role">' + escapeHtml(p.role) + '</div>';
        html += '    <div class="dose-info"><strong>Dosagem:</strong> ' + escapeHtml(p.dose) + '</div>';
        html += '    <div class="dose-info"><strong>Frequ\u00eancia:</strong> ' + escapeHtml(p.timing) + '</div>';
        html += '  </div>';
    });
    html += '</div>';

    if (s.application) {
        html += '<div class="modal-section">';
        html += '  <h3>Aplica\u00e7\u00e3o</h3>';
        html += '  <div class="application-box">' + escapeHtml(s.application) + '</div>';
        html += '</div>';
    }

    html += '<div class="modal-section">';
    html += '  <h3>Sinergia</h3>';
    html += '  <div class="synergy-box">' + escapeHtml(s.synergy) + '</div>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>Dura\u00e7\u00e3o Recomendada</h3>';
    html += '  <p>' + escapeHtml(s.duration) + '</p>';
    html += '</div>';

    html += '<div class="modal-section">';
    html += '  <h3>N\u00edvel de Evid\u00eancia</h3>';
    html += '  <div class="evidence-box">' + escapeHtml(s.evidenceLevel) + '</div>';
    html += '</div>';

    // References if available
    if (s.references && s.references.length > 0) {
        html += '<div class="modal-section">';
        html += '  <h3>Refer\u00eancias Cient\u00edficas</h3>';
        html += '  <ul>';
        s.references.forEach(function(r) {
            html += '    <li>' + sanitizeReferenceHtml(r) + '</li>';
        });
        html += '  </ul>';
        html += '</div>';
    }

    html += '<div class="warning-box">';
    html += '  <strong>ATEN\u00c7\u00c3O:</strong> ' + escapeHtml(s.warnings) + ' As combina\u00e7\u00f5es listadas s\u00e3o baseadas em l\u00f3gica farmacol\u00f3gica e relatos de pesquisa. ';
    html += '  N\u00e3o h\u00e1 ensaios cl\u00ednicos testando estas combina\u00e7\u00f5es espec\u00edficas. Consulte sempre um m\u00e9dico.';
    html += '</div>';

    modalContent.innerHTML = html;
    bindModalActionHandlers();
    modalOverlay.style.opacity = '';
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    modalLastFocused = document.activeElement;
    enableModalTrap();
    if (modalClose) modalClose.focus();
    // SEO: update title and URL hash
    document.title = String(s.name || '') + ' - Guia de Pept\u00eddeos';
    history.replaceState(null, '', '#stack-' + id);
}

function bindModalActionHandlers() {
    modalContent.querySelectorAll("[data-modal-stack-id]").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            openStackModal(link.getAttribute("data-modal-stack-id"));
        });
    });

    modalContent.querySelectorAll("[data-modal-peptide-id][data-source-stack-id]").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            openPeptideFromStack(
                link.getAttribute("data-modal-peptide-id"),
                link.getAttribute("data-source-stack-id")
            );
        });
    });
}

function enableModalTrap() {
    if (modalTrapHandler) return;
    modalTrapHandler = function(e) {
        if (e.key !== 'Tab') return;
        var focusable = modalOverlay.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        if (focusable.length === 0) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    };
    modalOverlay.addEventListener('keydown', modalTrapHandler);
}

function disableModalTrap() {
    if (modalTrapHandler) {
        modalOverlay.removeEventListener('keydown', modalTrapHandler);
        modalTrapHandler = null;
    }
}

// Close modal
function closeModal() {
    var modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.add('modal-exit');
    }
    modalOverlay.style.opacity = '0';
    setTimeout(function() {
        modalOverlay.classList.remove("active");
        modalOverlay.style.opacity = '';
        document.body.style.overflow = "";
        if (modal) modal.classList.remove('modal-exit');
    }, 250);
    disableModalTrap();
    if (modalLastFocused) {
        modalLastFocused.focus();
        modalLastFocused = null;
    }
    // SEO: restore original title and URL
    document.title = 'Guia Completo de Pept\u00eddeos - Refer\u00eancia Cient\u00edfica sobre Pept\u00eddeos Terap\u00eauticos';
    history.replaceState(null, '', window.location.pathname);
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', window.defaultMetaDescription || 'Guia cient\u00edfico com pept\u00eddeos terap\u00eauticos, dosagens, efeitos colaterais, mecanismos de a\u00e7\u00e3o e refer\u00eancias PubMed.');
    }
}

// Open peptide/stack from URL hash on page load
function openFromHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    if (hash.indexOf('stack-') === 0) {
        var stackId = hash.replace('stack-', '');
        // Switch to stacks section
        document.querySelector('[data-section="stacks"]').click();
        setTimeout(function() { openStackModal(stackId); }, 100);
    } else {
        openModal(hash);
    }
}

// Start
document.addEventListener("DOMContentLoaded", function() {
    init();
});
