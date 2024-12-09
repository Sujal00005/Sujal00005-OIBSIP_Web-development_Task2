document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Indicator Animation
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        scrollIndicator.style.opacity = scrollPosition > 50 ? 0 : 1;
    });

    // Glow Button Effect
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'scale(1.2)';
    });
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'scale(1)';
    });
});
