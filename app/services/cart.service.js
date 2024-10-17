const UserModel = require('../models/User.model');

class CartService {
  async addToCart(userId, productId) {
    const user = await UserModel.findById(userId);
    const existingProductIndex = user.cart.findIndex(item => item.product.toString() === productId);

    if (existingProductIndex >= 0) {
      user.cart[existingProductIndex].quantity += 1;
    } else {
      user.cart.push({ product: productId, quantity: 1 });
    }

    await user.save();
    return user.cart;
  }

  async removeFromCart(userId, productId) {
    const user = await UserModel.findById(userId);
    // user.cart = user.cart.filter(item => item.product.toString() !== productId);

    const existingProductIndex = user.cart.findIndex(item => item.product.toString() === productId);
    if (existingProductIndex >= 0) {
      const product = user.cart[existingProductIndex];

      if(product.quantity > 1){
        product.quantity -= 1;
      }
      else{
        user.cart.splice(existingProductIndex, 1);
      }
    } 
    else{
      throw new Error('Product not found in cart');
    }
    await user.save();
    return user.cart;
  }

  async deleteItemFromCart(userId, productId) {
    const user = await UserModel.findById(userId);
    user.cart = user.cart.filter(item => item.product.toString() !== productId);
    await user.save();
    return user.cart;
  }

  async getCart(userId) {
    const user = await UserModel.findById(userId).populate('cart.product');
    return user.cart;
  }
}

module.exports = new CartService();
