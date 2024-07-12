import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    clientInfo: {
      type: Schema.Types.ObjectId,
      ref: "ClientInfo",
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = model("Booking", bookingSchema);

export default Booking;
