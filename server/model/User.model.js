import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  date: { type: Date, default: Date.now },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

export const UserModel = model("User", UserSchema);
