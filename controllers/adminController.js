const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/libros.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require("sequelize");

const controller = {
	// Vista - Create
	indexCreate: (req, res) => {
		res.render('admin', { products, toThousand } )
	},
	
	// Create -  Method to store
	create: async (req, res) => {
		let img
		// let ultimoId = Number(products[products.length -1].id);
		// let nuevoUltimoId = (ultimoId + 1).toString();
		console.log(req.files)
		if(req.files[0] != undefined){
		img = req.files[0].filename
		} else {
			img = 'demo.png'
		};
		
		console.log(req.body)
		db.Libro.create({

			libro_genero_id : req.body.libro_generos,			
			libro_autor_id : req.body.libro_autor,		
        	libro_titulo : req.body.libro_titulo,			
        	libro_sinopsis: req.body.libro_sinopsis,		
        	libro_paginas: req.body.libro_paginas,		
        	libro_editorial: req.body.libro_editorial,	
        	libro_precio : req.body.libro_precio,			
        	libro_imagen: req.body.img
		})	.catch(error => console.log(error))
			.then(function(Libro){
			res.redirect('/admin/create');
		});
		// products.push(newProduct)
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
	},

	// Vista - Update
	indexEdit: (req, res) => {
		res.render('edit')
	},
	
	// Update - Method to update
	update: (req, res) => {
		// let id = req.body.id;
		// let productToEdit = products.find(product => product.id == id)
		
		let image
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = null
		}

		db.Libro.update(
		{
			libro_genero_id: req.body.categorias,
			// libro_subgenero_id : NO TIENE INPUT CREADO EN EL FORM
        	libro_autor_id: req.body.autor,
			libro_titulo: req.body.titulo,
        	libro_imagen: image,
        	libro_sinopsis: req.body.sinopsis,
        	libro_paginas: req.body.paginas,
        	libro_editorial: req.body.editorial,
			libro_precio: req.body.precio,		
		},
		{
			where: {libro_id : req.body.id}
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
		res.render('delete')
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.body.id;
		console.log(id)
		db.Libro.destroy({
			where : {libro_id : id}
		})
		.catch(error => console.log(error))
		res.redirect('/') 
		// let finalProducts = products.filter(product => product.id != id);
		// fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
	}
};

module.exports = controller;