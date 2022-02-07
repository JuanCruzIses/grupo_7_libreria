const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const productsController = require('../controllers/productsController');



router.get("/buscar", productsController.buscar);



module.exports = router;