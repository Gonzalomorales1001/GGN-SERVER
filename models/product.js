const { Schema, model } = require('mongoose');

const Product_Schema=Schema({
    name: {
        type: String,
        required: [true,'Product name is required'],
    },
    description: {
        type: String,
        required: [true,'Product must have a description'],
    },
    price: {
        type: Number,
        required: [true, 'Product must have a price']
    },
    // images: {
    //     type: ArrayBuffer,
    //     required: [true, 'Product must have at least 1 image']
    // }
});

const Product = model('Product',Product_Schema);

module.exports = Product;