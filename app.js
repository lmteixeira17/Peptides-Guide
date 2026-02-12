// Combine all peptide data parts
var peptides = [
    ...(typeof peptidesPart1 !== "undefined" ? peptidesPart1 : []),
    ...(typeof peptidesPart2 !== "undefined" ? peptidesPart2 : []),
    ...(typeof peptidesPart3 !== "undefined" ? peptidesPart3 : [])
];

// State
var currentCategory = "all";
var currentSearch = "";

// DOM elements
var cardsContainer = document.getElementById("cardsContainer");
var searchInput = document.getElementById("searchInput");
var countDisplay = document.getElementById("countDisplay");
var modalOverlay = document.getElementById("modalOverlay");
var modalContent = document.getElementById("modalContent");
var modalClose = document.getElementById("modalClose");
var filterButtons = document.querySelectorAll(".filter-btn");

// Initialize
function init() {
    renderCards();
    bindEvents();
}

// Bind events
function bindEvents() {
    searchInput.addEventListener("input", function(e) {
        currentSearch = e.target.value.toLowerCase().trim();
        renderCards();
    });

    filterButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            filterButtons.forEach(function(b) { b.classList.remove("active"); });
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderCards();
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

// Render cards
function renderCards() {
    var filtered = getFilteredPeptides();
    countDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
        cardsContainer.innerHTML = '<div class="no-results"><h3>Nenhum pept\u00eddeo encontrado</h3><p>Tente outro termo de busca ou categoria.</p></div>';
        return;
    }

    var html = "";
    filtered.forEach(function(p) {
        var initials = p.name.substring(0, 2).toUpperCase();
        var statusClass = p.status === "approved" ? "" : (p.status === "trial" ? "trial" : "research");
        html += '<div class="card" onclick="openModal(\'' + p.id + '\')">';
        html += '  <div class="card-header">';
        html += '    <div class="card-icon ' + p.category + '">' + initials + '</div>';
        html += '    <div class="card-title-group">';
        html += '      <div class="card-title">' + p.name + '</div>';
        if (p.aka) {
            html += '      <div class="card-aka">' + p.aka + '</div>';
        }
        html += '    </div>';
        html += '  </div>';
        html += '  <div class="card-body">';
        html += '    <p class="card-description">' + p.description + '</p>';
        html += '  </div>';
        html += '  <div class="card-tags">';
        html += '    <span class="tag tag-category">' + p.categoryLabel + '</span>';
        html += '    <span class="tag tag-status ' + statusClass + '">' + p.statusLabel + '</span>';
        html += '  </div>';
        html += '  <div class="card-footer">';
        html += '    <span>Ver detalhes completos</span>';
        html += '    <span>&rarr;</span>';
        html += '  </div>';
        html += '</div>';
    });

    cardsContainer.innerHTML = html;
}

// Open modal
function openModal(id) {
    var p = peptides.find(function(item) { return item.id === id; });
    if (!p) return;

    var html = '';
    html += '<div class="modal-header">';
    html += '  <div class="modal-title">' + p.name + '</div>';
    if (p.aka) {
        html += '  <div class="modal-aka">Tamb\u00e9m conhecido como: ' + p.aka + '</div>';
    }
    html += '  <div class="modal-tags" style="margin-top:0.8rem">';
    var statusClass = p.status === "approved" ? "" : (p.status === "trial" ? "trial" : "research");
    html += '    <span class="tag tag-category">' + p.categoryLabel + '</span>';
    html += '    <span class="tag tag-status ' + statusClass + '">' + p.statusLabel + '</span>';
    html += '    <span class="tag" style="background:#f3e8ff;color:#7c3aed">Meia-vida: ' + p.halfLife + '</span>';
    html += '    <span class="tag" style="background:#ecfdf5;color:#065f46">Via: ' + p.administration + '</span>';
    html += '  </div>';
    html += '</div>';

    // Description
    html += '<div class="modal-section">';
    html += '  <h3>Descri\u00e7\u00e3o</h3>';
    html += '  <p>' + p.description + '</p>';
    html += '</div>';

    // Mechanism
    html += '<div class="modal-section">';
    html += '  <h3>Mecanismo de A\u00e7\u00e3o</h3>';
    html += '  <p>' + p.mechanism + '</p>';
    html += '</div>';

    // Benefits
    html += '<div class="modal-section">';
    html += '  <h3>Benef\u00edcios e Usos</h3>';
    html += '  <ul>';
    p.benefits.forEach(function(b) {
        html += '    <li>' + b + '</li>';
    });
    html += '  </ul>';
    html += '</div>';

    // Side effects
    html += '<div class="modal-section">';
    html += '  <h3>Efeitos Colaterais</h3>';
    html += '  <div class="severity-legend">';
    html += '    <span><span class="severity-dot common"></span> Comum</span>';
    html += '    <span><span class="severity-dot occasional"></span> Ocasional</span>';
    html += '    <span><span class="severity-dot rare"></span> Raro</span>';
    html += '  </div>';
    p.sideEffects.forEach(function(se) {
        html += '  <div class="side-effect-item">';
        html += '    <span class="severity-dot ' + se.severity + '"></span>';
        html += '    <span>' + se.name + '</span>';
        html += '  </div>';
    });
    html += '</div>';

    // Dosage
    html += '<div class="modal-section">';
    html += '  <h3>Dosagem Recomendada nos Estudos</h3>';
    html += '  <table class="dosage-table">';
    html += '    <thead><tr><th>Protocolo</th><th>Dosagem</th><th>Observa\u00e7\u00f5es</th></tr></thead>';
    html += '    <tbody>';
    p.dosage.forEach(function(d) {
        html += '    <tr>';
        html += '      <td><strong>' + d.protocol + '</strong></td>';
        html += '      <td>' + d.dose + '</td>';
        html += '      <td>' + d.notes + '</td>';
        html += '    </tr>';
    });
    html += '    </tbody>';
    html += '  </table>';
    html += '</div>';

    // Warning
    html += '<div class="warning-box">';
    html += '  <strong>AVISO IMPORTANTE:</strong> As dosagens listadas s\u00e3o baseadas em estudos cient\u00edficos publicados e servem apenas como refer\u00eancia informativa. ';
    html += '  N\u00e3o constitui recomenda\u00e7\u00e3o m\u00e9dica. Consulte sempre um profissional de sa\u00fade qualificado antes de utilizar qualquer subst\u00e2ncia.';
    html += '</div>';

    modalContent.innerHTML = html;
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// Start
document.addEventListener("DOMContentLoaded", init);
