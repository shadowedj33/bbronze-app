import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    min: 6,
    max: 255,
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
});

const User = model("User", UserSchema);

export default User;
