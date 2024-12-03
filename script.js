window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.skills-list span, .experience article, .projects div, .education p');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
    });
});
