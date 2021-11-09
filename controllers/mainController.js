const fs = require('fs');
const biblioteca = fs.readFileSync('./data/libros.json', 'utf-8')
const libros = JSON.parse(biblioteca);

const novedades = libros.filter(libro => libro.seccion === "novedades");
const masVendidos = libros.filter(libro => libro.seccion === "masVendidos");

const mainController = {
    //CONTROLADOR DE VISTAS
    index : (req, res) => {
        res.render('index', {libros, novedades, masVendidos})
    },
    search: (req, res) => {
        
    },
    carrito : (req, res) => {
        res.render('carrito')
    }
};

module.exports = mainController;