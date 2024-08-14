const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  phone: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model("User", userSchema);
