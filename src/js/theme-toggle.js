document.getElementById('theme-toggle').addEventListener('click', function() {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.getAttribute('data-theme') === 'dark';
    htmlElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    localStorage.theme = isDarkMode ? 'light' : 'dark';
});

// On page load
if (localStorage.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}
