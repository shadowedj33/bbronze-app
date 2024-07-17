import express from 'express';
import { createReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/jwt.js';

const router = express.Router();

router.post('/:serviceId', verifyUser, createReview);

export default router;