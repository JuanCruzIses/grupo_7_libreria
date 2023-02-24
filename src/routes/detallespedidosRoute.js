import {Router} from 'express';
const router = Router();

//Requiriendo funcionalidad del controlador
import { listardetallesPedidos } from '../controllers/pedidosdetallesController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

// router.post('/:id', authMiddleware, listardetallesPedidos);

export default router