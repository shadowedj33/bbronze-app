import express from 'express';
import {
    updateUser,
    deleteUser,
    getUser,
    getAllUser
} from '../controllers/userController.js';
import {verifyUser, verifyAdmin} from '../utils/jwt.js';

const router = express.Router();

router.put('/:id', verifyUser, updateUser);

router.delete('/:id', verifyUser, deleteUser);

router.get('/:id', verifyUser, getUser);

router.get('/', verifyAdmin, getAllUser);

export default router;