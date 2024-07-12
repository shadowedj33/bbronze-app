import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
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

const Review = model("Review", reviewSchema);

export default Review;
