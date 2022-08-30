const fs = require('fs');
const path = require('path');
// const productsFilePath = path.join(__dirname, '../data/libros.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../../database/models');
const sequelize = db.sequelize
const { Op } = require("sequelize");

const controller = {
	// Vista - Create
	indexCreate: async (req, res) => {
	const products = await db.Libro.findAll()
		.then(function(libros){
			res.render('admin', { products, toThousand } )
		})
	},
	
	// Create -  Method to store
	create: async (req, res) => {		
		

		// let ultimoId = Number(products[products.length -1].id);
		// let nuevoUltimoId = (ultimoId + 1).toString();
		// console.log(req.files)
		// if(req.files[0] != undefined){
		// 	img = req.files[0].filename
		// } else {
		// 	img = 'default-image.png'
		// }
		
		//console.log(req.body)


		db.Libro.create({
			libro_genero_id : req.body.libro_generos,			
			libro_autor_id : req.body.libro_autor,		
       		libro_titulo : req.body.libro_titulo,			
        	libro_sinopsis: req.body.libro_sinopsis,		
        	libro_paginas: req.body.libro_paginas,		
        	libro_editorial: req.body.libro_editorial,	
        	libro_precio : req.body.libro_precio,			
      		libro_imagen: req.file.filename,
			libro_stock : req.body.libro_stock
		})	.catch(error => console.log(error))
			.then(function(Libro){
			console.log('Libro_Creado');
			res.redirect('/admin/create');
		});
		// products.push(newProduct)
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
	},

	// Vista - Update
	indexEdit: async (req, res) => {
		let id = req.params.id;
		let libroEdit = await db.Libro.findByPk(id)
		
		res.render('edit', {libroEdit})
	},
	
	// Update - Method to update
	update: (req, res) => {
		// let id = req.body.id;
		// let productToEdit = products.find(product => product.id == id)
		
		// let image
		// if(req.files[0] != undefined){
		// 	image = req.files[0].filename
		// } else {
		// 	image = null
		// }

		console.log(req.body)
		db.Libro.update(
		{
			libro_genero_id: req.body.categorias,
			// libro_subgenero_id : NO TIENE INPUT CREADO EN EL FORM
        	libro_autor_id: req.body.autor,
			libro_titulo: req.body.titulo,
			// libro_imagen: req.file.filename,
        	// libro_sinopsis: req.body.sinopsis,
        	libro_paginas: req.body.paginas,
        	libro_editorial: req.body.editorial,
			libro_precio: req.body.precio,
			libro_stock: req.body.libro_stock		
		},
		{
			where: {libro_id : req.params.id}
		})
			.then(()=>{
				return res.redirect('/products') })
				.catch(error => console.log(error));
		
		// let newProducts = products.map(product => {
		// 	if (product.id == productToEdit.id) {
		// 		return product = {...productToEdit};
		// 	}
		// 	return product;
		// })
		// fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
	},

	// Vista - Delete
	indexDelete: (req, res) => {
		let id = req.params.id;
		res.render('delete', {id})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.body.id;
		db.Libro.destroy({
			where : {libro_id : id}
		})
		.catch(error => console.log(error))
		res.redirect('/') 
		// let finalProducts = products.filter(product => product.id != id);
		// fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
	},

	// Vista - Add Author
	indexAuthor: async (req, res) => {
		const autores = await db.Autor.findAll()
			.then(function(autores){
				res.render('addAuthor', {autores : autores} )}
			)
	},

	// AddAuthor - Agregar un autor a DB
	addAuthor: (req, res) => {
		db.Autor.create({
			autor_nombre : req.body.autor_nombre,			
			autor_biografia : req.body.autor_biografia
		})	.catch(error => console.log(error))
			.then(function(){
			console.log('Autor_Creado');
			res.redirect('/admin/create');
		});
	}
};

module.exports = controller;