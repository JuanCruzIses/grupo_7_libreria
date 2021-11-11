const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/libros.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('admin', {
			products,
			toThousand
		})
	},

	
	// Create -  Method to store
	create: (req, res) => {
		let img
		console.log(req.files);
		if(req.files[0] != undefined){
			img = req.files[0].filename
		} else {
			img = 'default-image.png'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			img: img
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/create');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.body.id
		let productToEdit = products.find(product => product.id == id)
		res.render('admin', {productToEdit})
	},
	// Update - Method to update
/*
	update: (req, res) => {
		let id = req.body.id;
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},
*/
	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
};

module.exports = controller;