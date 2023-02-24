import { pool } from '../db.js'
const promisePool = pool.promise();

export const indexCreate = async (req, res) => {
	const products = await db.Libro.findAll()
		.then(function(libros){
			res.render('admin', { libros } )
		})
	}
	
export const create = async (req, res) => {		
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
	}

export const indexEdit = async (req, res) => {
		let id = req.params.id;
		let libroEdit = await db.Libro.findByPk(id)
		
		res.render('edit', {libroEdit})
	}
	
export const update = async (req, res) => {
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
		
	}

export const indexDelete = async (req, res) => {
		let id = req.params.id;
		res.render('delete', {id})
	}

export const destroy = async (req, res) => {
		let id = req.body.id;
		db.Libro.destroy({
			where : {libro_id : id}
		})
		.catch(error => console.log(error))
		res.redirect('/') 
	}

export const indexAuthor = async (req, res) => {
		const autores = await db.Autor.findAll()
			.then(function(autores){
				res.render('addAuthor', {autores : autores} )}
			)
	}

export const addAuthor = async (req, res) => {
		db.Autor.create({
			autor_nombre : req.body.autor_nombre,			
			autor_biografia : req.body.autor_biografia
		})	.catch(error => console.log(error))
			.then(function(){
			console.log('Autor_Creado');
			res.redirect('/admin/create');
		});
	}
