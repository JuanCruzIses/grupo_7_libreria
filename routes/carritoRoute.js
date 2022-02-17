const express = require('express');
const router = express.Router();

//Requiriendo funcionalidad del controlador
const carritoController = require('../controllers/carritoController.js');
const userLoggedcarrito = require("../middlewares/authMiddleware");
//Dando ruta al controlador
router.get('/', userLoggedcarrito, carritoController.carrito);
router.post("/add/:id", userLoggedcarrito, carritoController.addProduct);
router.post("/addc/:id", userLoggedcarrito, carritoController.addc);
router.post("/order/add", userLoggedcarrito, carritoController.addOrder);
router.post("/item/delete/:id", carritoController.destroyItem);



module.exports = router;
