const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const pedidosdetallesController = require('../controllers/pedidosdetallesController.js');
const userLoggedcarrito = require("../middlewares/authMiddleware");
//Dando ruta al controlador

router.post('/:id', userLoggedcarrito, pedidosdetallesController.listardetallesPedidos);

module.exports = router;