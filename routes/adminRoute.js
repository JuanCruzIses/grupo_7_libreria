// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

// ************ MiddleWares Require ************

const portadasMulter = require('../middlewares/portadasMulter');
const adminMiddlewares = require('../middlewares/adminMiddlewares')

// ************ CREATE *************

router.get('/create', adminMiddlewares, adminController.indexCreate); 
router.post('/create', portadasMulter.single('img'), adminController.create); 

// ************ CREATE *************

router.get('/addAuthor', adminMiddlewares, adminController.indexAuthor); 
router.post('/addAuthor', portadasMulter.single('img'), adminController.addAuthor); 

// ************ EDIT *************

router.get('/edit/:id', adminMiddlewares, adminController.indexEdit); 
router.post('/edit/:id', portadasMulter.single('img'), adminController.update); 


 // *** DELETE ONE PRODUCT ***
router.get('/delete/:id', adminMiddlewares, adminController.indexDelete); 
router.post('/delete/:id', adminController.destroy);
 

module.exports = router;
