import {Router} from 'express';
const router = Router();

//Requiriendo funcionalidad del controlador
import { aboutUs } from '../controllers/mainController.js';

//Dando ruta al controlador
router.get('/', aboutUs);

export default router