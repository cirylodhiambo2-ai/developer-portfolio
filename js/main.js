// Wait until the entire HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Grab the button element from the DOM
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // 2. Listen for scroll events on the window
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        // If the user scrolls down more than 300px from the top, show the button
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            // Otherwise, keep it hidden
            scrollTopBtn.style.display = "none";
        }
    }

    // 3. When the user clicks the button, smoothly snap back to the top
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Gives it that elegant sliding animation
        });
    });

    // Console log just to verify our file is linked up and running perfectly
    console.log("Portfolio interactive scripts loaded successfully!");
});