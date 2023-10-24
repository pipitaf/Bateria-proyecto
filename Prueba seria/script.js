let Estrellas = document.getElementById('Estrellas');
let Sol = document.getElementById('Sol')
let Montaña_detras = document.getElementById('Montaña_detras')
let Montaña_lago = document.getElementById('Montaña_lago')
let Arboles_frente = document.getElementById('Arboles_frente')
let Arboles_detras = document.getElementById('Arboles_detras')

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    Estrellas.style.left = value + 'px';
})

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    Sol.style.down = value + 'px';
})