import {Router} from 'express';
const router = Router();

// ************ Controller Require ************
import { indexCreate, create, addAuthor, indexAuthor, indexEdit, update, indexDelete, destroy } from '../controllers/adminController.js';

// ************ MiddleWares Require ************

import {upload} from '../middlewares/portadasMulter.js';
import {adminMiddlewares} from '../middlewares/adminMiddlewares.js'

// ************ CREATE *************

// router.get('/create', adminMiddlewares, indexCreate); 
// router.post('/create', upload.single('img'), create); 

// ************ CREATE AUTHOR *************

// router.get('/addAuthor', adminMiddlewares, indexAuthor); 
// router.post('/addAuthor', upload.single('img'), addAuthor); 

// ************ EDIT *************
// router.get('/edit/:id', adminMiddlewares, indexEdit); 
// router.post('/edit/:id', upload.single('img'), update); 


 // *** DELETE ONE PRODUCT ***
// router.get('/delete/:id', adminMiddlewares, indexDelete); 
// router.post('/delete/:id', destroy);
 
export default router
