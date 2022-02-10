const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

// const fs = require('fs');
// let biblioteca = fs.readFileSync('./data/libros.json', 'utf-8');
// let libros = JSON.parse(biblioteca);

// // function actualizar(){
// //     biblioteca = fs.readFileSync('./data/libros.json', 'utf-8');
// //     libros = JSON.parse(biblioteca);
// }

const productsController = {
	buscar: async function (req, res, next) {
		//let librosx = await db.Libro.findAll() variable para agregar mas productos librosx foreach
		let libroSearch = req.query.libro;
		const libros = await db.Libro.findAll({

			where: {
				libro_titulo: { [Op.like]: '%' + libroSearch + '%' }
			}
		})
		let a = 0;
		libros.forEach(libro => {
			a = libros.length
		})
		console.log(a)
		return res.render("libroList", { libros: libros, a/*librosx:librosx */ });


	},
	//index product
	index: async (req, res) => {
		const libros = await db.Libro.findAll()
			.then(function(libros){
				res.render('products', {libros : libros} )
		})
	},
	
    //Detalle de un producto
    detail: (req, res) => {
		// actualizar();
		// res.render('productDetail', { libros, title: 'Detalle de Producto', id})
		const id = req.params.id;
		db.Libro.findByPk(id, {
			include: [{association: 'autores'}]
		})
		.then(libro => res.render('productDetail', {libro : libro}))
		//.then(res.render('productDetail', libro))
		.catch(error => console.log(error))
	},
		
	//Categorias ----> género
	generos: async (req, res) => {
		const idGenero = req.params.idGenero;
		// const generos = await db.Genero.findAll()
		// 	.then(function(genero){
		// 		res.send ({genero})
		// 	});
		const libros = await db.Libro.findAll({where: {libro_genero_id : idGenero} })
			.then(function(libros){
			res.render('productsCategory', {libros : libros , idGenero : idGenero} ) })
				.catch(error => console.log(error))
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