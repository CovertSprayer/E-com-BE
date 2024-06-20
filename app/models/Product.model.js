const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required: true
    },
    imageUrl:{
        type:String,
        default: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    description:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Product', productSchema);