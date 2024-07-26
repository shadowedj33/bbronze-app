import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
    const { user, name, email, phone, serviceBooking, addOnsBooking, date, location, time, status } = req.body;
    try {
        const booking = await Booking.create({
            user,
            name,
            email,
            phone,
            serviceBooking,
            addOnsBooking,
            date,
            location,
            time,
            status
        });
        res.status(201).json({
            success: true,
            message: "Successfully created booking.",
            data: booking
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create booking."
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

export const postbooking = async (req, res) => {
    
}