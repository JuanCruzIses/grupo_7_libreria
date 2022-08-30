const express = require('express');
const router = express.Router();
const validateRegister = require('../middlewares/validateRegister')
const loggedMiddlewares = require('../middlewares/loggedMiddlewares')
const notLoggedMiddlewares = require('../middlewares/notLoggedMiddleware')

// Requiriendo funcionalidad de los controladores //
const userController = require('../controllers/userController.js');

// ************ MiddleWares Require ************
const profileImages = require('../middlewares/profileImages');


//----------REGISTER-------//
router.get('/register', loggedMiddlewares, userController.vistaRegistro);
router.post('/register', validateRegister, userController.registrar);
//----------LOGIN-------//
router.get('/login', loggedMiddlewares ,userController.vistaLogin);
router.post('/login', userController.login)
//----------LOGOUT-------//
router.get('/logout', userController.logout);
//----------PROFILE-------//
router.get('/profile/:id', notLoggedMiddlewares, userController.vistaProfile);
router.post('/profile/:id', profileImages.single('img'), userController.editProfile);

module.exports = router;
