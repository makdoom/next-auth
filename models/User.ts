import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide an email"],
  },
  password: {
    type: String,
    unique: true,
    required: [true, "Please provide password"],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
