const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const loginController = require('../controllers/loginController.js');

//Dando ruta al controlador
router.get('/', loginController.login);

module.exports = router;
