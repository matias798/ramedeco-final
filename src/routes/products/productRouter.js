var express = require('express');
var router = express.Router();
let products= require('../../controller/productsController');

/* GET home page. */
router.get('/create', products.create);

router.get('/:id', products.edit);


module.exports = router;
