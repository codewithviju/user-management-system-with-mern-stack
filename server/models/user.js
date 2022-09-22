import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  city: {
    type: String,
  },
  profile: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
