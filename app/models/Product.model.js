const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  imageSrc: [
    {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    },
  ],
  description: {
    type: String,
    required: true,
  },
  colors: [
    {
      type: String,
    },
  ],
  sizes: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
