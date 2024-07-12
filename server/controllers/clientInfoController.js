import ClientInfo from "../models/ClientInfo.js";

export const createClientInfo = async (req, res) => {
    const newClientInfo = new ClientInfo(req.body)
    try {
        const savedClientInfo = await newClientInfo.save();
        res.status(200).json({
            success: true,
            message: "Your Form has been recorded.",
            data: savedClientInfo
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed recording your form, try again."
        });
    }
};

export const getClientInfo = async (req, res) => {
    const { id } = req.params.id;
    try {
        const clientInfo = await ClientInfo.findbyId(id);
        res.status(200).json({
            success: true,
            message: "Successfully fetched Client Info.",
            data: clientInfo
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch client info."
        });
    }
};

export const updateClientInfo = async (req, res) => {
    const { id } = req.params.id;
    try {
        const updatedClientInfo = await ClientInfo.findByIdAndUpdate(id,
            {
                $set : req.body
            }, {new: true})
        res.status(200).json({
            success: true,
            message: "Successfully updated Client Info.",
            data: updatedClientInfo
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update client info."
        });
    }
};

export const deleteClientInfo = async (req, res) => {
    const { id } = req.params.id;
    try {
        await ClientInfo.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted Client Info."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete client info."
        });
    }
};

export const getAllClientInfo = async (req, res) => {
    const page = parseInt(req.query.page);
    try {
        const clientInfo = await ClientInfo.find().limit(10).skip(10 * (page - 1));
        res.status(200).json({
            success: true,
            message: "Successfully fetched all Client Info.",
            data: clientInfo
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch client info."
        });
    }
};
