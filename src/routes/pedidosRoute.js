import {Router} from 'express';
const router = Router();

import {listarPedidos} from '../controllers/pedidosController.js';
import {authMiddleware} from "../middlewares/authMiddleware.js";
//Dando ruta al controlador

// router.get('/', authMiddleware, listarPedidos);


export default router