const express = require('express');
const productsController = require('../controllers/product.controller');
const { authenticate } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:productId', productsController.getProductById);
// router.use(authenticate);
router.post('/', productsController.createProduct);
router.put('/:productId', productsController.updateProduct);
router.delete('/:productId', productsController.deleteProduct);

module.exports = router;