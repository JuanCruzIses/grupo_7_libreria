const fs = require('fs');
const biblioteca = fs.readFileSync('./data/libros.json', 'utf-8')
const libros = JSON.parse(biblioteca);

const productsController = {
    detail: (req, res) => {
        const id = req.params.id - 1;
        res.render('productDetail', { libros, title: 'Detalle de Producto', id})
    },
    comprar: (req, res) => {
        const id = req.params.id - 1;
        res.render("carrito", { libros, id})
    }
}

module.exports = productsController;