const titulo = document.getElementById("libro_titulo");
const editorial = document.getElementById("libro_editorial")

titulo.addEventListener('focusout', function(){
    let tituloText = titulo.value;
    titulo.value = tituloText.toUpperCase();
    console.log(titulo.value);
});

editorial.addEventListener('focusout', function(){
    let editorialText = editorial.value;
    editorial.value = editorialText.toUpperCase();
    console.log(editorial.value);
});