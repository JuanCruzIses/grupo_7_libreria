const fs = require('fs');
const biblioteca = fs.readFileSync('./data/libros.json', 'utf-8')
const libros = JSON.parse(biblioteca);

const productsController = {
	//index product
	index: (req, res) => {
		res.render('products', {libros : libros})
	},

    //Detalle de un producto
    detail: (req, res) => {
        const id = req.params.id - 1;
        res.render('productDetail', { libros, title: 'Detalle de Producto', id})
    },

    //Product detail ---> Comprar ahora
    comprar: (req, res) => {
        const id = req.params.id - 1;
        res.render("carrito", { libros, id})
    },

    //Create -  Method to store
	store: (req, res) => {
		const nuevoProducto = {
			id: products.length +1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.body.image,
		}
		products.push(nuevoProducto)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null))
		res.redirect('/')
	},
}

module.exports = productsController;