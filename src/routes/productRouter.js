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

router.get('/create',productsController.create)
router.get('/shoppingcart',productsController.getShoppingcart);
router.get('/edit/:id',productsController.edit);

router.put('/:id',upload.any(), productsController.update);
router.get('/detail/:id', productsController.findById);
router.get('/categories/:category', productsController.getProductByCategory);
router.get('/',productsController.getAllProducts);
router.delete('/:id', productsController.deleteById);
router.post('/',upload.any(),[
      check('tittle').notEmpty().withMessage('Debes escribir un titulo para tu producto'),
	check('tittle').isLength({min:5}).withMessage('El titulo debe tener minimamente 5 caracteres'),
	check('description').isLength({min:20}).withMessage('La decripcion debe tener minimamente 20 caracteres')

], productsController.store);
router.post('/addToCart',productsController.addToCart);
module.exports = router;

