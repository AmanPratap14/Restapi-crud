const Product = require("../models/productModel")
const Category = require("../models/categoryModel")
const { json } = require("body-parser")

module.exports.getProducts = async function(req,res){
    try{
        const products = await Product.find()
        const category = await Category.find()
        console.log(products)
        res.json({"data":[products,category],"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}

module.exports.getProduct = async function(req,res){
    try{
        var product = await Product.findOne({"productId" : req.params['id']})
        var category = await Category.findOne({"categoryId": product.categoryId})
        res.json({"data":[product,category],"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}

module.exports.createProduct = async function(req,res){
    const product = new Product({
        productId: req.body.productId,
        productName : req.body.productName ,
        qtyPerUnit : req.body.qtyPerUnit ,
        unitPrice : req.body.unitPrice ,
        unitInStock : req.body.unitInStock ,
        discontinued : req.body.discontinued ,
        categoryId : req.body.categoryId
    })
    try{
        const create = await product.save()
        res.json({"message":"Product created successfully","data":create,"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}

module.exports.updateProduct = async function(req,res){
    res.status(200).send("this is update")
}

module.exports.deleteProduct = async function(req,res){
    try{
        const product = await Product.remove({"productId": req.params['id']})
        res.json({"message":"Product deleted successfully","data":product,"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}

