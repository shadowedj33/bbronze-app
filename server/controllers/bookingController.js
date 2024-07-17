import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({
            success: true,
            message: "Booking successful.",
            data: savedBooking
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to book. Try again."
        });
    }
};

export const getBooking = async (req, res) => {
    const { id } = req.params.id;
    try {
        const booking = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message: "Successfully fetched booking.",
            data: booking
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to fetch booking"
        });
    }
};

export const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({
            success: true,
            message: "Successfully fetched all bookings.",
            data: bookings
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings."
        });
    }
};