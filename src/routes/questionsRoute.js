import {Router} from 'express';
const router = Router();

import { listQuestions, addQuestions } from '../controllers/questionsController.js';

//Dando ruta al controlador
router.get('/', listQuestions);
router.post('/crearquestions', addQuestions);

export default router