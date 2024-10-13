const ProductService = require("../services/product.service");

class ProductsController {
  async getAllProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const productId = req.params.productId;
      const product = await ProductService.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req, res, next) {
    try {
      const productData = req.body;
      const createdProduct = await ProductService.createProduct(productData);
      res.status(201).json(createdProduct);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const productId = req.params.productId;
      const productData = req.body;
      const updatedProduct = await ProductService.updateProduct(
        productId,
        productData
      );
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const productId = req.params.productId;
      const deletedProduct = await ProductService.deleteProduct(productId);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
