const ProductModel = require('../models/Product.model');

class ProductService {
  async getAllProducts() {
    return ProductModel.find();
  }

  async getProductById(productId) {
    return ProductModel.findById(productId);
  }

  async createProduct(productData) {
    const product = new ProductModel(productData);
    return product.save();
  }

  async updateProduct(productId, productData) {
    return ProductModel.findByIdAndUpdate(productId, productData, { new: true });
  }

  async deleteProduct(productId) {
    return ProductModel.findByIdAndDelete(productId);
  }
}

module.exports = new ProductService();