const mongoose = require("mongoose");

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
  processingTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

const addOnSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Service = mongoose.model("Service", serviceSchema);
const AddOn = mongoose.model("AddOn", addOnSchema);

module.exports = { Service, AddOn };
