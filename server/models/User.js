import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      min: 10,
      max: 10,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

var User =  mongoose.model("User", userSchema);

export default User;