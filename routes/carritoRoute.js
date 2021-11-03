const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const carritoController = require('../controllers/carritoController.js');

//Dando ruta al controlador
router.get('/', carritoController.carrito);

module.exports = router;