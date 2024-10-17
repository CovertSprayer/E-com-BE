const router = require('express').Router();
const productRoutes = require('./product.routes');
const authRoutes = require('./auth.routes')
const cartRoutes = require('./cart.routes')

router.use('/products', productRoutes);
router.use('/auth', authRoutes);
router.use('/cart', cartRoutes);

module.exports = router;