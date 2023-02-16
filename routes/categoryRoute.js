const express = require('express')
const router = express.Router()
const categoryController = require("../controller/categoryController")

// to get the category data
router.get('/', categoryController.getCategories)

// to get the category data by id
router.get('/:id', categoryController.getCategory)

//to add the category 
router.post('/', categoryController.createCategory)

//to update the category 
router.put('/:id', categoryController.updateCategory)

//to delete the category
router.delete('/:id', categoryController.deleteCategory)


module.exports = router