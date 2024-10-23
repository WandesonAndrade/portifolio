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

    // Seleciona o h2 do menu
const menuH2 = document.querySelector('.menu-container h2');

// Função que verifica a rolagem da página
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Se a rolagem for maior que 50px
        menuH2.classList.add('small'); // Adiciona a classe 'small'
    } else {
        menuH2.classList.remove('small'); // Remove a classe 'small'
    }
});

});
