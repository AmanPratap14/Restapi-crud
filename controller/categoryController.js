const Category = require("../models/categoryModel")

module.exports.getCategories = async function(req,res){
    try{
        const categories = await Category.find()
        res.json({"data":categories,"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}

module.exports.getCategory = async function(req,res){
    try{
        const category = await Category.findOne({"categoryId": req.params['id']})
        res.json({"data":category,"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}

module.exports.createCategory = async function(req,res){
    const category = new Category({
        categoryId: req.body.categoryId,
        categoryName : req.body.categoryName 
    })
    try{
        const create = await category.save()
        res.json({"message":"Category created successfully","data":create,"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}

module.exports.updateCategory = async function(req,res){
    res.status(200).send("this is update")
}

module.exports.deleteCategory = async function(req,res){
    try{
        const category = await Category.remove({"categoryId": req.params['id']})
        res.json({"message":"Category deleted successfully","data":category,"status": "success","error":false})
    }catch(err)
    {
        res.json({"error_details": err, "status": false,"error":true})
    }
}
