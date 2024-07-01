const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    durationMinutes: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    addOns: [{
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    }]
});

const ServiceModel = mongoose.model('Service', serviceSchema);

module.exports = ServiceModel;