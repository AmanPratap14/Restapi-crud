const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type:String,
        required:true
    },
    productName: {
        type:String,
        required:true
    },
    qtyPerUnit: {
        type:String,
        required:true
    },
    unitPrice: {
        type:Number,
        required:true
    },
    unitInStock: {
        type:Number,
        required:true
    },
    discontinued: {
        type:Boolean,
        required:false
    },
    categoryId: {
        type:String,
        required:false
    }
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product;