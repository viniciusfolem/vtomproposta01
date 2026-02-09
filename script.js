document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Additional animations could go here
    console.log('Folem Proposal Loaded');
});
