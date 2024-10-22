const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Abre/fecha o menu ao clicar no ícone
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Fecha o menu ao clicar em um item do menu
document.querySelectorAll('.menu li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open'); // Fecha o menu ao clicar em um item
    });
});
