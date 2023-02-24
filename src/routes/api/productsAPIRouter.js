import {Router} from 'express';
const router = Router();
import {list, ultimo, generos} from '../../controllers/api/productsAPIController.js'

router.get('/', list);
//Ulitmo Producto
router.get('/lastProduct', ultimo);
//generos
router.get('/generos', generos);
// router.post('/create', productsAPIController.create);
// router.delete('/delete/:id', productsAPIController.destroy);

export default router;