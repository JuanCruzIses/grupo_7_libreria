import {Router} from 'express';
const router = Router();

import {validateRegister} from '../middlewares/validateRegister.js'
import {loggedMiddlewares} from '../middlewares/loggedMiddlewares.js'
import {notLoggedMiddlewares} from '../middlewares/notLoggedMiddleware.js'

// Requiriendo funcionalidad de los controladores //
import { vistaRegistro, registrar, vistaLogin, login, logout, vistaProfile, editProfile } from '../controllers/userController.js';

// ************ MiddleWares Require ************
import { upload } from '../middlewares/profileImages.js';


//----------REGISTER-------//
// router.get('/register', upload, vistaRegistro);
// router.post('/register', validateRegister, registrar);
//----------LOGIN-------//
// router.get('/login', loggedMiddlewares ,vistaLogin);
router.post('/login', login)
//----------LOGOUT-------//
router.get('/logout', logout);
//----------PROFILE-------//
// router.get('/profile/:id', notLoggedMiddlewares, vistaProfile);
// router.post('/profile/:id', upload.single('img'), editProfile);

export default router