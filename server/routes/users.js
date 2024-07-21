import express from 'express';
import {
    registerUser,
    loginUser,
    getUserData,
    logoutUser,

} from '../controllers/userController.js';
import authMiddleware from "../utils/authMiddleware.js"

const router = express.Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.post('/logout', logoutUser);

router.post('/getUserData', authMiddleware, getUserData);

export default router;