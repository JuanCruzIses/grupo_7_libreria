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
//----------PROFILE-------//
router.get('/profile', userController.vistaProfile);
router.put('/profile/:id', userController.editProfile)

module.exports = router;
