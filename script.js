// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Add JavaScript for interactive features and animations
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff0';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
});