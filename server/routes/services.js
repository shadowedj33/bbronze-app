import express from 'express';
import {
    createService,
    updateService,
    deleteService,
    getService,
    getAllService,
} from '../controllers/serviceController.js';
import { verifyAdmin } from '../utils/jwt.js';

const router = express.Router();

router.post('/', verifyAdmin, createService);
router.put('/:id', verifyAdmin, updateService);
router.delete('/:id', verifyAdmin, deleteService);
router.get('/:id', getService);
router.get('/', getAllService);

export default router;