const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const mainController = require('../controllers/mainController.js');

//Dando ruta al controlador
router.get('/', mainController.aboutUs);

module.exports = router;