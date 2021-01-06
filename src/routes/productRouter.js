const express = require('express');
const router = express.Router();
const multer = require('multer');
const path =require('path')
const storage = multer.diskStorage(
	{
		destination: (req,file,cb)=>{ 
            let pathToUse =path.resolve(__dirname,'..','..','public','images','home','productos')
            cb(null,pathToUse)},
		filename:  (req,file,cb)=>{ 
            let filename=file.originalname.substr(0,file.originalname.indexOf('.'))+'-' +Date.now() + path.extname(file.originalname)
            cb(null,filename)}
	}
)
const upload = multer({storage:storage})

/* GET home page. */
const productsController = require('../controller/productsController');

router.get('/create', productsController.create)
router.get('/shoppingcart',productsController.getShoppingcart);
router.get('/edit/:id', productsController.edit);

router.put('/:id',upload.any(), productsController.update);
router.get('/detail/:id', productsController.findById);
router.get('/', productsController.getAllProducts);
router.delete('/:id', productsController.deleteById);
router.post('/',upload.any(), productsController.store);
router.post('/addToCart', productsController.addToCart);
module.exports = router;

