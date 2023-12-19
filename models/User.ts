import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
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
    select: false,
  },
});

userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;
