var express = require('express');
var router = express.Router();
let productDetailController= require('./controller/productDetail')
/* GET users listing. */
router.get('/', productDetailController.getProductDetail);

module.exports = router;
