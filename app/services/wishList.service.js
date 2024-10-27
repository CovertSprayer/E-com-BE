const UserModal = require("../models/User.model");
const ProductModel = require("../models/Product.model");

class WishlistService {
  async addToWishlist(userId, productId) {
    const user = await UserModal.findById(userId).populate("wishlist");
    // Check if the product is already in the wishlist
    const product = await ProductModel.findById(productId);
    if (!product) {
      throw new Error("Product does not exist");
    }
    if (user.wishlist.includes(product)) {
      throw new Error("Product is already in the wishlist");
    }
    user.wishlist.push(product);
    await user.save();
    return user.wishlist;
  }

  async removeFromWishlist(userId, productId) {
    const user = await UserModal.findById(userId).populate("wishlist");
    const product = await ProductModel.findById(productId);
    if (!product) {
      throw new Error("Product does not exist");
    }

    user.wishlist = user.wishlist.filter(
      (item) => item._id.toString() !== productId
    );
    await user.save();
    return user.wishlist;
  }

  async getWishlist(userId) {
    const user = await UserModal.findById(userId).populate("wishlist");
    return user.wishlist;
  }
}

module.exports = new WishlistService();
