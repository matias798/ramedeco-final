var express = require('express');
var router = express.Router();
let usersController= require('../controller/usersController')

/* GET register page. */
router.get('/', usersController.getRegister);
router.post('/', usersController.registerUser);
module.exports = router;

