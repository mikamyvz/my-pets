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

// Animação no scroll
// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

