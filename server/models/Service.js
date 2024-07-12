import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
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

const addOnSchema = new Schema({
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

const Services = model("Services", serviceSchema);
const AddOns = model("AddOns", addOnSchema);

export default { Services, AddOns };
