var express = require('express');
var router = express.Router();
const productsContoller = require('../controller/productsController');

/* GET home page. */
router.get('/', productsContoller.getAll);
router.get('/delete/:id', productsContoller.deleteById);
router.get('/edit/:id', productsContoller.edit);
router.post('/edit/:id', productsContoller.store);
module.exports = router;
