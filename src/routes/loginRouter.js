var express = require('express');
var router = express.Router();
let usersController= require('../controller/usersController')

/* GET login page. */
router.get('/', usersController.getLogin);
router.post('/',usersController.logInUser );
router.get('/logout', usersController.logOutUser);
module.exports = router;

