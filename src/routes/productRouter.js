const express = require('express');
const router = express.Router();
const multer = require('multer');
const path =require('path');

const loginMiddleware = require('../middlewares/loginMiddleware');
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

router.get('/create',productsController.create)
router.get('/shoppingcart',productsController.getShoppingcart);
router.get('/edit/:id', loginMiddleware,productsController.edit);

router.put('/:id',upload.any(), productsController.update);
router.get('/detail/:id', productsController.findById);
router.get('/categories/:category', productsController.getProductByCategory);
router.get('/', loginMiddleware,productsController.getAllProducts);
router.delete('/:id',loginMiddleware, productsController.deleteById);
router.post('/',upload.any(), productsController.store);
router.post('/addToCart', loginMiddleware,productsController.addToCart);
module.exports = router;

