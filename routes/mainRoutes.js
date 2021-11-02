const express = require('express');
const app = express;
const router = express.Router();

const mainController = require('../controllers/mainController.js');

router.get('/', mainController.producto);

module.exports = router;
