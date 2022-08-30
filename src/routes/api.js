var express = require('express');
var router = express.Router();
const apisController = require("../controllers/api/apisController");

/* GET home page. */
router.post("/carrito/update", apisController.updateCart);




module.exports = router;
