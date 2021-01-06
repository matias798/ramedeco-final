var express = require('express');
var router = express.Router();
let products= require('../controller/productsController');

/* GET home page. */
router.get('/create', products.createGet);
router.post('/create', products.createPost);

router.get('/shoppingcart',products.getShoppingcart);

router.get('/:id/edit', products.edit);
router.put('/:id',products.editPut);


module.exports = router;
