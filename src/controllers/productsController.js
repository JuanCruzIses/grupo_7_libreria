import { pool } from '../db.js'
const promisePool = pool.promise();

export const buscar = async function (req, res) {
		let libroSearch =  req.query.libro;
		
		const Autor = await db.Autor.findOne({
			where:{
				autor_nombre: { [Op.like]: '%' + libroSearch + '%' }
			}
		})

		if( Autor != undefined){
		//let librosx = await db.Libro.findAll() variable para agregar mas productos librosx foreach
		
		const libros = await db.Libro.findAll({
			where:{
				[Op.or]:[{libro_titulo : {
				  [Op.like]: '%' +  libroSearch + '%'
				}}, {libro_autor_id : {
				  [Op.like]: '%' + Autor.autor_id + '%'
				}}],
				
			   }
			
		})
	
		console.log(Autor.autor_nombre)
	
		let a = 0;
		libros.forEach(libro => {
			a = libros.length
		})
		console.log(a)
		return res.render("libroList", { libros: libros, a/*librosx:librosx */ });

	}

	else {
          
		let libros = await db.Libro.findAll({where:{
		  [Op.and]:[{libro_titulo : {
			[Op.like]: '%' + libroSearch + '%'
		  }},]
		}})
		
	
		let a = 0;
		libros.forEach(libro => {
			a = libros.length
		})
	
		return res.render("libroList", { libros: libros, a/*librosx:librosx */ });

	  }
	}

export const index = async (req, res) => {
		const libros = await db.Libro.findAll()
			.then(function(libros){
				res.render('products', {libros : libros} )
		})
	}
	
export const detail = (req, res) => {
		// actualizar();
		// res.render('productDetail', { libros, title: 'Detalle de Producto', id})
		const id = req.params.id;
		db.Libro.findByPk(id, {
			include: [{association: 'autores'}]
		})
		.then(libro => res.render('productDetail', {libro : libro}))
		//.then(res.render('productDetail', libro))
		.catch(error => console.log(error))
	}
		
	//Categorias ----> género
export const generos = async (req, res) => {
		const idGenero = req.params.idGenero;
		// const generos = await db.Genero.findAll()
		// 	.then(function(genero){
		// 		res.send ({genero})
		// 	});
		const libros = await db.Libro.findAll({where: {libro_genero_id : idGenero} })
			.then(function(libros){
			res.render('productsCategory', {libros : libros , idGenero : idGenero} ) })
				.catch(error => console.log(error))
	}

    //Product detail ---> Comprar ahora
export const comprar = (req, res) => {
        const id = req.params.id - 1;
        res.render("carrito", { libros, id})
    }

    //Create -  Method to store
export const store = (req, res) => {
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
	}