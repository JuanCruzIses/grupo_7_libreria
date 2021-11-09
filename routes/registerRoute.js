const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const registerController = require('../controllers/registerController.js');

//Dando ruta al controlador
router.get('/', registerController.vistaRegistro)
router.get('/', registerController.registrar);


module.exports = router;
