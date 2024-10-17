const express = require('express');
const { addToCart, removeFromCart, getCart, deleteItemFromCart } = require('../controllers/cart.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const router = express.Router();

// Ensure user is authenticated before allowing cart operations
router.use(authenticate);

router.post('/add', addToCart);
router.post('/remove', removeFromCart);
router.delete('/remove/:productId', deleteItemFromCart);
router.get('/', getCart);

module.exports = router;
