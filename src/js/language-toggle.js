// src/js/language-toggle.js
document.getElementById('language-toggle').addEventListener('click', function() {
    const elements = document.querySelectorAll('[data-en], [data-pt]');
    const currentLang = this.textContent.trim();
    const newLang = currentLang === 'PT' ? 'EN' : 'PT';
    this.textContent = newLang;

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${newLang.toLowerCase()}`);
    });
});