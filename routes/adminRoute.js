// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

// ************ Multer ************ 
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/portadas');
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});

// ************ CREATE *************

router.get('/create', adminController.indexCreate); 
router.post('/create', upload.single(), adminController.create); 


// ************ EDIT *************

router.get('/edit', adminController.indexEdit); 
router.post('/edit', upload.any(), adminController.update); 


 // *** DELETE ONE PRODUCT ***
router.get('/delete', adminController.indexDelete); 
router.post('/delete', adminController.destroy);
 

module.exports = router;
