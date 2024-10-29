import { Router } from 'express';
import {
    store
} from '../controllers/expeditions-controller.js';

const router = Router();

router.post('/', store);

export default router;