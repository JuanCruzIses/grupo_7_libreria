const fs = require('fs');
const biblioteca = fs.readFileSync('./data/libros.json', 'utf-8')
const libros = JSON.parse(biblioteca);


const carritoController = {
    carrito : (req, res) => {
        res.render('carrito')
    }
};

module.exports = carritoController;