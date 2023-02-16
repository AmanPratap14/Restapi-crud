const express = require('express')
const router = express.Router()
const productController = require("../controller/productController")
// var bodyParser = require('body-parser');  

// to get the product data
router.get('/', productController.getProducts)

// to get the product data
router.get('/:id', productController.getProduct)

//to add the product 
router.post('/', productController.createProduct)

//to update the product 
router.put('/:id', productController.updateProduct)

//to delete the product
router.delete('/:id', productController.deleteProduct)


module.exports = router