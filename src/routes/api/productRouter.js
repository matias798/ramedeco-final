const express=require('express')
const router = express.Router()
const productsPath="/"
const productPath= productsPath + ":id"
const productApiController = require('../../controller/api/productApiController')

router.get(productsPath,productApiController.getProducts)
router.get(productPath,productApiController.getProductByid)

module.exports=router