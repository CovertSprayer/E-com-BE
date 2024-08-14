const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  phone: String,
  password: String,
  phoneVerified: Boolean
});

module.exports = mongoose.model("User", userSchema);
