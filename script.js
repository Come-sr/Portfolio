// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Determine the current theme based on localStorage or default to 'styles.css'
    const currentTheme = localStorage.getItem('theme') || 'styles.css';
    themeStylesheet.href = currentTheme;

    // Toggle the theme on button click
    themeToggleButton.addEventListener('click', () => {
        if (themeStylesheet.href.includes('styles.css')) {
            // Switch to the light theme
            themeStylesheet.href = 'stylesLIGHT.css';
            localStorage.setItem('theme', 'stylesLIGHT.css');
        } else {
            // Switch to the dark theme
            themeStylesheet.href = 'styles.css';
            localStorage.setItem('theme', 'styles.css');
        }
    });
});
