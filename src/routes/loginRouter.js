var express = require('express');
var router = express.Router();
let loginController= require('./controller/loginController')

/* GET login page. */
router.get('/', loginController.getLogin);

module.exports = router;

