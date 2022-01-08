const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
        username: { type: String, required: true },
        password: { type: String, required: true },
  },
  {
    versionKey: false
  }
);


const User = mongoose.model("login_user", userSchema);

module.exports = User;