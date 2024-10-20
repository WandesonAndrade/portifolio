document.addEventListener("DOMContentLoaded", function () {
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = document.getElementById('menu-fixo').offsetHeight; // Altura do menu fixo
            const elementPosition = target.getBoundingClientRect().top; // Posição do elemento alvo
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset; // Posição ajustada

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // Transparência do menu ao rolar
    const menuFixo = document.getElementById('menu-fixo');
    const originalBackgroundColor = 'rgba(68, 68, 68, 1)'; // Cor original
    const transparentBackgroundColor = 'rgba(68, 68, 68, 0.7)'; // Cor transparente

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            menuFixo.classList.add('menu-transparente');
            menuFixo.style.backgroundColor = transparentBackgroundColor; // Torna o fundo transparente
        } else {
            menuFixo.classList.remove('menu-transparente');
            menuFixo.style.backgroundColor = originalBackgroundColor; // Retorna à cor original
        }
    });

   
});
