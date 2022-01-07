// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

// ************ MiddleWares Require ************

const portadasMulter = require('../middlewares/portadasMulter');

// ************ CREATE *************

router.get('/create', adminController.indexCreate); 
router.post('/create', portadasMulter.single('img'), adminController.create); 


// ************ EDIT *************

router.get('/edit', adminController.indexEdit); 
router.post('/edit', portadasMulter.single('img'), adminController.update); 


 // *** DELETE ONE PRODUCT ***
router.get('/delete', adminController.indexDelete); 
router.post('/delete', adminController.destroy);
 

module.exports = router;
