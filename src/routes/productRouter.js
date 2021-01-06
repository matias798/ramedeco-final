var express = require('express');
var router = express.Router();
let products= require('../controller/productsController');

/* GET home page. */
router.get('/create', products.createGet);
router.post('/create', products.createPost);

router.get('/shoppingcart',products.getShoppingcart);

router.get('/:id', products.edit);
router.post('/:id', (req,res)=>{
res.send('fff')
});


module.exports = router;
