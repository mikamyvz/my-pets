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