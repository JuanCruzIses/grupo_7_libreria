const botonDesplegable = document.querySelector('#btn-menu');
const menuDesplegable = document.querySelector('#menu-desplegable');
const botonCategoria = document.querySelector('.btn-categoria');
const categoriasDesplegable = document.querySelector('.interior')

let clickBotonDesplegable = 1;
let clickBotonCategoriasDesplegable = 1;

botonDesplegable.addEventListener('click', function(e){
    clickBotonDesplegable++
    if(clickBotonDesplegable % 2 == 0){
        menuDesplegable.style.display = 'flex'
    } else {
        menuDesplegable.style.display = 'none'
    }
});

botonCategoria.addEventListener('click', function(e){
    clickBotonCategoriasDesplegable++
    if(clickBotonCategoriasDesplegable % 2 == 0){
        categoriasDesplegable.style.display = 'block'
    } else {
        categoriasDesplegable.style.display = 'none'
    }
});