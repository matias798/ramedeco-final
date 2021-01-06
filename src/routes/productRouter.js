var express = require('express');
var router = express.Router();
const productsController = require('../controller/productsController');
var multer = require('multer');
var path =require('path')
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
router.get('/create', productsController.create)
router.get('/shoppingcart',productsController.getShoppingcart);
router.get('/', productsController.getAllProducts);
router.post('/',upload.any(), productsController.store);
router.delete('/:id', productsController.deleteById);
router.get('/edit/:id', productsController.edit);
router.put('/:id', productsController.update);
router.get('/:id', productsController.findById);
module.exports = router;

