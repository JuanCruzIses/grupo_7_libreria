const express = require('express');
const router = express.Router();
const validateRegister = require('../middlewares/validateRegister')
const loggedMiddlewares = require('../middlewares/loggedMiddlewares')
const notLoggedMiddlewares = require('../middlewares/notLoggedMiddleware')

// Requiriendo funcionalidad de los controladores //
const userController = require('../controllers/userController.js');

//----------REGISTER-------//
router.get('/register', loggedMiddlewares, userController.vistaRegistro);
router.post('/register', validateRegister , userController.registrar);
//----------LOGIN-------//
router.get('/login', loggedMiddlewares ,userController.vistaLogin);
router.post('/login', userController.login)
//----------LOGOUT-------//
router.get('/logout', userController.logout);
//----------PROFILE-------//
router.get('/profile', notLoggedMiddlewares, userController.vistaProfile);
router.post('/profile/:id', userController.editProfile)

module.exports = router;
