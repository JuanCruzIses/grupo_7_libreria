import {Router} from 'express';
const router = Router();

//Requiriendo funcionalidad del controlador
import { carrito, addProduct, addc, addOrder, destroyItem } from '../controllers/carritoController.js';
import {authMiddleware} from"../middlewares/authMiddleware.js";
//Dando ruta al controlador
// router.get('/', authMiddleware, carrito);
// router.post("/add/:id", authMiddleware, addProduct);
// router.post("/addc/:id", authMiddleware, addc);
// router.post("/order/add", authMiddleware, addOrder);
// router.post("/item/delete/:id", destroyItem);


export default router;