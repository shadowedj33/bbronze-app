const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
      required: false,
    },
    service: {
      type: [String],
      ref: "Service",
      required: true,
    },
    serviceDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
