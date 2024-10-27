const WishlistService = require("../services/wishList.service");

class WishListController{
  async addToWishlist(req, res) {
    const { productId } = req.body;
    try {
      const wishlist = await WishlistService.addToWishlist(req.user.id, productId);
      res.status(200).json(wishlist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async removeFromWishlist(req, res) {
    const { productId } = req.params;
    try {
      const wishlist = await WishlistService.removeFromWishlist(req.user.id, productId);
      res.status(200).json(wishlist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getWishlist(req, res) {
    try {
      const wishlist = await WishlistService.getWishlist(req.user.id);
      res.status(200).json(wishlist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new WishListController();