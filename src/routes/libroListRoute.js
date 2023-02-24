import {Router} from 'express';
const router = Router();

//Requiriendo funcionalidad del controlador
import { buscar } from '../controllers/productsController.js';

router.get("/buscar", buscar);


export default router