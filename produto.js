function initializeCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#cxtipo1 .carousel-slide');
    const prevButton = document.getElementById('prevBtn1');
    const nextButton = document.getElementById('nextBtn1');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    // Configurar os botões de próxima e anterior
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Exibir o slide inicial
    showSlide(currentSlide);
}

initializeCarousel();



// Chame a função para inicializar o carrossel

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "ÍCONES/menu_icon(1).png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "ÍCONES/fechar_icon.svg";
    }
}