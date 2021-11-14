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

router.get('/create', adminController.index); 
router.post('/create', upload.any(), adminController.create); 



/*** EDIT ONE PRODUCT 
router.get('/edit', router.get('/create', adminController.index); 
.index); 
router.patch('/edit', upload.any(),adminController.update); 


 DELETE ONE PRODUCT
router.delete('/edit', adminController.index);
***/ 

module.exports = router;
