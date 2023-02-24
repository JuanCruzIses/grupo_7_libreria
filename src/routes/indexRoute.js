import {Router} from 'express';
const router = Router();

//Requiriendo funcionalidad del controlador
import {index} from '../controllers/mainController.js';

//Dando ruta al controlador
router.get('/', index);

export default router;
