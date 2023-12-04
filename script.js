let Estrellas = document.getElementById('Estrellas');
let Sol = document.getElementById('Sol')
let Montaña_detras = document.getElementById('Montaña_detras')
let Montaña_lago = document.getElementById('Montaña_lago')
let Arboles_frente = document.getElementById('Arboles_frente')
let Arboles_detras = document.getElementById('Arboles_detras')
let Logo = document.querySelector('.logo');
let Logo_largo = document.getElementById('text')
let Lago = document.getElementById('Lago')


window.addEventListener('scroll',function(){
    let value = window.scrollY;
    Estrellas.style.left = value * 0.25 + 'px';
    Sol.style.top = value * 0.3 + 'px';
    Montaña_detras.style.top = value * 0.2 + 'px';
    Logo_largo.style.top = value * 0.5 + 'px';
    Lago.style.marginBottom = value * 4.9 + 'px';
})


/* Carusel */

const carouselContent = document.querySelector('.carousel-content');
let currentIndex = 0;

function prevSlide() {
    currentIndex = (currentIndex - 1 + 4) % 4;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 4;
    updateCarousel();
}

function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    carouselContent.style.transform = 'translateX(' + newTransformValue + ')';
}

/* Temporizador */


setInterval(() => {
  nextSlide();
}, 15000);

/* Carusel */
