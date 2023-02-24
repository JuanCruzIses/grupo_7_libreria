import {Router} from 'express';
const router = Router();

import {updateCart} from "../controllers/api/apisController.js";

/* GET home page. */
router.post("/carrito/update", updateCart);



export default router;