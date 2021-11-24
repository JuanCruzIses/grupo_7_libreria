const fs = require('fs');
let biblioteca = fs.readFileSync('./data/libros.json', 'utf-8');
let libros = JSON.parse(biblioteca);

function actualizar(){
    biblioteca = fs.readFileSync('./data/libros.json', 'utf-8');
    libros = JSON.parse(biblioteca);
}



const mainController = {
    //CONTROLADOR DE VISTAS
    index : (req, res) => {
        actualizar();
        const novedades = libros.filter(libro => libro.seccion === "novedades");
        const masVendidos = libros.filter(libro => libro.seccion === "masVendidos");
        res.render('index', {libros, novedades, masVendidos})
    },
    search: (req, res) => {
        
    },
    carrito : (req, res) => {
        res.render('carrito')
    },
    aboutUs : (req, res) => {
        res.render('aboutUs')
    },
    questions : (req, res) => {
        res.render('questions')
    }
};


module.exports = mainController;