const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const registerController = require('../controllers/registerController.js');

//Dando ruta al controlador
router.get('/', registerController.register);

module.exports = router;
