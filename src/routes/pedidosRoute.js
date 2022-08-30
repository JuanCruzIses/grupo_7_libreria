const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const pedidosController = require('../controllers/pedidosController.js');
const userLoggedcarrito = require("../middlewares/authMiddleware");
//Dando ruta al controlador

router.get('/', userLoggedcarrito, pedidosController.listarPedidos);






module.exports = router;