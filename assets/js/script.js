// Menu Mobile
function initMenu() {
    const btnMobile = document.getElementById('btn-mobile');
    function toggleMenu() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    }
    btnMobile.addEventListener('click', toggleMenu);
}
initMenu();

// FAQ
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'flex') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'flex';
        }
    });
});
