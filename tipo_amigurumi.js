document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".imgpromoção");
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    function showImage(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Altera a imagem a cada 3 segundos (3000 milissegundos)
});

function status() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display == "block" ? "none" : "block");

}

//carrossel1

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

// Chame a função para inicializar o carrossel
initializeCarousel();

  

//carrossel2
function initializeCarousel2() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#cxtipo2 .carousel-slide');
    const prevButton = document.getElementById('prevBtn2');
    const nextButton = document.getElementById('nextBtn2');

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

// Chame a função para inicializar o carrossel
initializeCarousel2();


//carrossel3

function initializeCarousel3() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#cxtipo3 .carousel-slide');
    const prevButton = document.getElementById('prevBtn3');
    const nextButton = document.getElementById('nextBtn3');

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

// Chame a função para inicializar o carrossel
initializeCarousel3();


//carrossel4

function initializeCarousel4() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#cxtipo4 .carousel-slide');
    const prevButton = document.getElementById('prevBtn4');
    const nextButton = document.getElementById('nextBtn4');

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

// Chame a função para inicializar o carrossel
initializeCarousel4();


//carrossel5

function initializeCarousel5() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#cxtipo5 .carousel-slide');
    const prevButton = document.getElementById('prevBtn5');
    const nextButton = document.getElementById('nextBtn5');

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

// Chame a função para inicializar o carrossel
initializeCarousel5();

//carrossel6

function initializeCarousel6() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#cxtipo6 .carousel-slide');
    const prevButton = document.getElementById('prevBtn6');
    const nextButton = document.getElementById('nextBtn6');

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

// Chame a função para inicializar o carrossel
initializeCarousel6();


//carrossel7

function initializeCarousel7() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#cxtipo7 .carousel-slide');
    const prevButton = document.getElementById('prevBtn7');
    const nextButton = document.getElementById('nextBtn7');

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

// Chame a função para inicializar o carrossel
initializeCarousel7();

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
