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
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await ProductModel.findOne({ _id: id });
        res.status(200).json({
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error.'
        })
    }
})

// update product
router.put('/:id', async () => {
    try {
        const id = req.params.id;
        const value = req.body;
        const product = await ProductModel.findOneAndUpdate({ _id: id }, { ...value }, {new: true});
        res.status(200).json({
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error.'
        })
    }
})

// delete product
router.delete('/:id', async () => {
    try {
        const id = req.params.id;
        const product = await ProductModel.findOneAndDelete({ _id: id });
        res.status(200).json({
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error.'
        })
    }
})

module.exports = router;