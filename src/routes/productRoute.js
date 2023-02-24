import {Router} from 'express';
const router = Router();

import {index, detail, generos, comprar} from '../controllers/productsController.js';

//VISTA DE TODOS LOS PRODUCTOS
router.get('/', index)

/*** DETALLE DE UN PRODUCTO ***/ 
router.get('/:id', detail);

/*** GÉNERO DE UN PRODUCTO ***/ 
router.get('/genero/:idGenero', generos);

/*** CARRITO DE UN PRODUCTO ***/ 
router.get('/carrito', comprar);

export default router