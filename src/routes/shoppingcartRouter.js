var express = require('express');
var router = express.Router();
let shoppingcartController= require('../controller/shoppingcartController');
/* GET home page. */
router.get('/',shoppingcartController.getShoppingcart);

module.exports = router;
