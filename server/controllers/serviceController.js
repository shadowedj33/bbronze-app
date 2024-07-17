import Service from "../models/Service.js";

export const createService = async (req, res) => {
    const newService = new Service(req.body);
    try {
        const savedService = await newService.save();
        res.status(200).json({
            success: true,
            message: 'Service created successfully',
            data: savedService,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Service creation failed',
        });
    }
};

export const updateService = async (req, res) => {
    const { id } = req.params.id;
    try {
        const updatedService = await Service.findByIdAndUpdate(id,
            {
                $set: req.body,
            },
            { new: true })
        res.status(200).json({
            success: true,
            message: 'Service updated successfully',
            data: updatedService,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Service update failed',
        });
    }
};

export const deleteService = async (req, res) => {
    const { id } = req.params.id;
    try {
        await Service.findbyIdandDelete(id);
        res.status(200).json({
            success: true,
            message: 'Service deleted successfully',
        });
    } catch (err) {
        res.status(500).json({
            success: failure,
            message: 'Failed to delete, try again.',
        });
    }
};

export const getService = async (req, res) => {
    const { id } = req.params.id;
    try {
        const service = await Service.findById(id);
        res.status(200).json(service);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve service',
        });
    }
};

export const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services)
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve services',
        });
    }
};