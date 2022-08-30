const express = require('express');
const router = express.Router();


const questionsController = require('../controllers/questionsController.js');

//Dando ruta al controlador
router.get('/', questionsController.listQuestions);
router.post('/crearquestions', questionsController.addQuestions);

module.exports = router;