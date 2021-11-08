const fs = require('fs');
const biblioteca = fs.readFileSync('./data/libros.json', 'utf-8')
const libros = JSON.parse(biblioteca);

const productDetailController = {
    productDetail: (req, res) => {
        res.render('productDetail', { libros, title: 'Detalle de Producto', id: (req.params.id - 1)})
    }
}
const carritoController = {
    carrito : (req, res) => {
        res.render('carrito')
    }
};

module.exports = carritoController;