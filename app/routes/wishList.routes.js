const express = require('express');
const WishListController = require('../controllers/wishList.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const router = express.Router();

router.use(authenticate);

router.post('/add', WishListController.addToWishlist);
router.delete('/remove/:productId', WishListController.removeFromWishlist);
router.get('/', WishListController.getWishlist);

module.exports = router;
