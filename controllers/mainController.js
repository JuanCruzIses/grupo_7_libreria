const fs = require('fs');
const biblioteca = fs.readFileSync('./data/libros.json', 'utf-8')
const libros = JSON.parse(biblioteca);

const novedades = libros.filter(libro => libro.seccion === "novedades");
const masVendidos = libros.filter(libro => libro.seccion === "masVendidos");

const mainController = {
    index : (req, res) => {
        res.render('index', {libros, novedades, masVendidos})
    }
};

module.exports = mainController;