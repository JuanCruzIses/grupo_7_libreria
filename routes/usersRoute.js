const express = require('express');
const router = express.Router();
const validateRegister = require('../middlewares/validateRegister')
const loggedMiddlewares = require('../middlewares/loggedMiddlewares')

// Requiriendo funcionalidad de los controladores //
const userController = require('../controllers/userController.js');

//----------REGISTER-------//
router.get('/register', loggedMiddlewares, userController.vistaRegistro);
router.post('/register', validateRegister , userController.registrar);
//----------LOGIN-------//
router.get('/login', loggedMiddlewares ,userController.vistaLogin);
router.post('/login', userController.login)



module.exports = router;
