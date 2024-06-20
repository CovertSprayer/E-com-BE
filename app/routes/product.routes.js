const router = require('express').Router();
const ProductModel = require('../models/Product.model');

// read all products
router.get('/', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({
            products: products
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error.'
        })
    }
})

//read one product
router.get('/:id', async () => {

})

// update product
router.put('/:id', async () => {

})

// delete product
router.delete('/:id', async () => {

})

module.exports = router;