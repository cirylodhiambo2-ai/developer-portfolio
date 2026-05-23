// Wait until the complete DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Create the toggle button dynamically
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌙'; // Default moon icon for dark mode
    themeToggle.setAttribute('aria-label', 'Toggle theme light or dark');
    
    // 2. Inject the button directly into the navigation bar
    const navContainer = document.querySelector('nav');
    if (navContainer) {
        navContainer.appendChild(themeToggle);
    }

    // 3. Add an event listener to handle the click action
    themeToggle.addEventListener('click', () => {
        // Toggle the 'light-theme' class on the root <html> element
        const isLightTheme = document.documentElement.classList.toggle('light-theme');
        
        // Update the button icon based on the active theme state
        themeToggle.innerHTML = isLightTheme ? '☀️' : '🌙';
        
        // Optional: Log state to console for debugging
        console.log(`Theme toggled. Light theme active: ${isLightTheme}`);
    });
});