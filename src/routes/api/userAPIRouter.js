import {Router} from 'express';
const router = Router();
import {create, ultimo, list} from '../../controllers/api/userAPIController.js';

router.get('/', list);
router.get('/lastUser', ultimo);
router.post('/create', create)
// router.delete('/delete/:id', userAPIController.destroy);

export default router;