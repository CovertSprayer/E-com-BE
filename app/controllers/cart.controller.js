// controllers/cartController.js
const CartService = require("../services/cart.service");

// Cart Controller
class CartController {
  async addToCart(req, res, next) {
    const { productId } = req.body;
    try {
      const cart = await CartService.addToCart(req.user.id, productId);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  // decrease quantity if > 1 else remove
  async removeFromCart(req, res, next) {
    const { productId } = req.body;
    try {
      const cart = await CartService.removeFromCart(req.user.id, productId);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  // delete item from the cart
  async deleteItemFromCart(req, res, next) {
    const { productId } = req.params;
    try {
      const cart = await CartService.deleteItemFromCart(req.user.id, productId);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }

  async getCart(req, res, next) {
    try {
      const cart = await CartService.getCart(req.user.id);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
