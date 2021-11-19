const express = require('express');
const router = express.Router();
const validateRegister = require('../middlewares/validateRegister')

//Requiriendo funcionalidad del controlador
const registerController = require('../controllers/registerController.js');

//Dando ruta al controlador
router.get('/', registerController.vistaRegistro);

router.post('/', validateRegister , registerController.registrar);


module.exports = router;
