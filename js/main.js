// Simple fade-in and slide-up animation for the hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.typing-text');
    const heroSub = document.querySelector('.subtitle');
    const heroBtn = document.querySelector('.primary-btn');

    // Initial state
    [heroText, heroSub, heroBtn].forEach(el => {
        if(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });

    // Trigger animation after a slight delay
    setTimeout(() => {
        if(heroText) {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }
    }, 100);

    setTimeout(() => {
        if(heroSub) {
            heroSub.style.opacity = '1';
            heroSub.style.transform = 'translateY(0)';
        }
    }, 400);

    setTimeout(() => {
        if(heroBtn) {
            heroBtn.style.opacity = '1';
            heroBtn.style.transform = 'translateY(0)';
        }
    }, 700);
});
