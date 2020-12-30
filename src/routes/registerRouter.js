var express = require('express');
var router = express.Router();
let registerController= require('../controller/registerController')

/* GET register page. */
router.get('/', registerController.getRegister);

module.exports = router;

