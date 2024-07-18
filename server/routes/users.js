import express from 'express';
import {
    registerUser,
    loginUser,
    getUserData,
    logoutUser,

} from '../controllers/userController.js';
import { verifyUser } from '../utils/jwt.js';

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.post('/logout', logoutUser);

router.post('/getUserData', verifyUser, getUserData);

export default router;