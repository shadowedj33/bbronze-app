const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        min: 10,
        max: 10
    },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;