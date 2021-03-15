const express = require('express');
const router = express.Router();
const multer = require('multer');
const path =require('path');
const {check,validationResult,body}= require('express-validator')


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

router.get('/create',loginMiddleware,productsController.create)
router.get('/shoppingcart',productsController.getShoppingcart);
router.post('/shoppingcart',productsController.savePurchase);
router.get('/edit/:id',loginMiddleware,productsController.edit);

router.put('/:id',upload.any(),[
	check('tittle').notEmpty().withMessage('Debes escribir un titulo para tu producto'),
	
	check('tittle').isLength({min:5}).withMessage('El titulo debe tener minimamente 5 caracteres'),
	check('product_detail').isLength({min:20}).withMessage('La decripcion debe tener minimamente 20 caracteres')

],
productsController.update);
router.get('/detail/:id', productsController.findById);
router.get('/categories/:category', productsController.getProductByCategory);
router.get('/',loginMiddleware,productsController.getAllProducts);
router.delete('/:id', loginMiddleware,productsController.deleteById);
router.post('/',upload.any(),[
    check('tittle').notEmpty().withMessage('Debes escribir un titulo para tu producto'),
	check('tittle').isLength({min:5}).withMessage('El titulo debe tener minimamente 5 caracteres'),
	check('description').isLength({min:20}).withMessage('La decripcion debe tener minimamente 20 caracteres')

], productsController.store);
router.post('/addToCart',loginMiddleware,productsController.addToCart);
module.exports = router;

