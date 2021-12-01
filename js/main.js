const container = document.querySelector('.lang');
const buttons = container.querySelectorAll('a');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
