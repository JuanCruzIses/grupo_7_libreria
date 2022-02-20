const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/', productsAPIController.list);
//Ulitmo Producto
router.get('/lastProduct',productsAPIController.ultimo);
//generos
router.get('/generos',productsAPIController.generos);
// router.post('/create', productsAPIController.create);
// router.delete('/delete/:id', productsAPIController.destroy);

module.exports = router;