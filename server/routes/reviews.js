import express from 'express';
import { createReview, getUserReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/jwt.js';
import authMiddleware from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/', verifyUser, createReview);

router.get('/reviews', authMiddleware, getUserReview);

export default router;