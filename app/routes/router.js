const router = require('express').Router();
const productRoutes = require('./product.routes');
// const userRoutes = require('./quote.routes');

router.use('/products', productRoutes);
// router.use('/users', userRoutes);

module.exports = router;