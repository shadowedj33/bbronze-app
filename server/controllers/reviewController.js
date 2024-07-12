import Service from "../models/Service.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    const { serviceId } = req.params.serviceId;
    const newReview = new Review({...req.body});

    try {
        const savedReview = await newReview.save();
        await Service.findByIdAndUpdate(serviceId, {
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