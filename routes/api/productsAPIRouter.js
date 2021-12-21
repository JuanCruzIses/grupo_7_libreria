const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/', productsAPIController.list);
// router.post('/create', productsAPIController.create);
// router.delete('/delete/:id', productsAPIController.destroy);

module.exports = router;