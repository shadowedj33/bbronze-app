import Review from "../models/Review.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";


export const createReview = async (req, res) => {
    const newReview = new Review({...req.body});

    try {
        const savedReview = await newReview.save();
        await User.findByIdAndUpdate(req.user.id, {
            $push: { reviews: savedReview._id },
        });
        res.status(201).json({
            success: true,
            message: "Review Submitted",
            data: savedReview
        });
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: "Review Failed to Post.",
        });
    }
};

export const getUserReview = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ message: "Unauthorized", success: false });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded._id;

        const review = await Review.find({ owner: userId }).select('+_id -_v');
        if (!review || review.length === 0) {
            return res.status(404).send({ message: "Review not found", success: false });
        }

        res.send({ success: true, reviews: review });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve reviews.",
        });
    }
};