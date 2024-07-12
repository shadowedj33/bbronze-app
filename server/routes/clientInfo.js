import express from 'express';
import {
    createClientInfo,
    getClientInfo,
    updateClientInfo,
    deleteClientInfo,
    getAllClientInfo,
} from "../controllers/clientInfoController.js";
import { verifyUser, verifyAdmin } from '../utils/jwt.js';

const router = express.Router();

router.post('/', verifyUser, createClientInfo);
router.get('/:id', verifyUser, getClientInfo);
router.put('/:id', verifyUser, updateClientInfo);
router.delete('/:id', verifyUser, deleteClientInfo);
router.get('/', verifyAdmin, getAllClientInfo);

export default router;