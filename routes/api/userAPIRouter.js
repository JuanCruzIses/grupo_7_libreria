const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController');

router.get('/', userAPIController.list);
router.post('/create', userAPIController.create)
// router.delete('/delete/:id', userAPIController.destroy);

module.exports = router;