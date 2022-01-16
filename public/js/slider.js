let imagenes = ['banner-libros-favoritos.png', 'banner-navidad.png', 'banner-1.png', 'banner-2.png'];
let path = '/images/banners/';
const slider = document.querySelector('#contSlider');

let banners = new Array; 
for (let i = 0; i < imagenes.length; i++) {
    banners.push(path + imagenes[i]);

    var img = $('<img />',
             { id: 'imagen-'+i,
               class: 'imagen',
               src: banners[i], 
             })
              .appendTo($('#contSlider'));
};

let anchoSlider = (100 * banners.length) + '%';
let anchoImagen = (100 / banners.length) + '%';

slider.style.width = anchoSlider;

let sliderImg = document.querySelectorAll('.imagen');

for (let i = 0; i < sliderImg.length; i++) {
    sliderImg[i].style.width = anchoImagen;
}

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector('#btn-right');

let izquierda = 1;
let derecha = 0;

let contador = 0;

function Izquierda() {
    contador++
    console.log(contador)
    if (izquierda == 1 && banners.length > 0 && contador < banners.length){
        
        slider.style.marginLeft = ('-' + 100 * contador + '%')

        derecha = 1;

    } else if (contador == banners.length && banners.length > 0){
        
        contador = 0;

        slider.style.marginLeft = '0%';

        izquierda = 1;
        derecha = 0;

    };  

};

function Derecha() {
    contador--;
    console.log(contador)
    if (derecha == 1 && banners.length > 0 && contador < banners.length && contador >= 0){
        slider.style.transitionProperty = 'margin-left'
        slider.style.transitionDuration = '0.5s';
        slider.style.marginLeft = ('-' + 100 * contador + '%')

        izquierda = 1;

    } else if (contador <0 && banners.length > 0){
        
        contador = (banners.length - 1);

        slider.style.marginLeft = ('-' + 100 * contador +'%');

        derecha = 1;
        izquierda = 0;

    };  

};

function DarTransicion(){
    slider.style.transitionProperty = 'margin-left'
    slider.style.transitionDuration = '0.5s';
};

btnRight.addEventListener('click', function(){
    DarTransicion()
    Izquierda();  
});

btnLeft.addEventListener('click', function(){
    DarTransicion()
    Derecha();
});

setInterval(() => {
    DarTransicion();
    Izquierda();
}, 5000);

