const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

//VISTA DE TODOS LOS PRODUCTOS
router.get('/', productsController.index)

/*** DETALLE DE UN PRODUCTO ***/ 
router.get('/:id', productsController.detail);

/*** GÉNERO DE UN PRODUCTO ***/ 
router.get('/genero/:idGenero', productsController.generos);

/*** CARRITO DE UN PRODUCTO ***/ 
router.get('/carrito', productsController.comprar);


module.exports = router;