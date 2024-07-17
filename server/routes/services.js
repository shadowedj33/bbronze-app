import express from 'express';
import {
    createService,
    updateService,
    deleteService,
    getService,
    getServices,
} from '../controllers/serviceController.js';
import { verifyAdmin } from '../utils/jwt.js';

const router = express.Router();

router.post('/', verifyAdmin, createService);
router.put('/:id', verifyAdmin, updateService);
router.delete('/:id', verifyAdmin, deleteService);
router.get('/service/:id', getService);
router.get('/services', getServices);

export default router;