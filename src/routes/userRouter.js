var express = require('express');
var router = express.Router();
let usersController= require('../controller/usersController');


/* GET admin page*/
/*router.get('/', usersController.adminUser);*/

/* GET user profile page*/
/**router.get('/profile', usersController.userProfile);*/

/* GET register page. */
router.get('/register', usersController.getRegister);
router.post('/register', usersController.registerUser);

/* GET login page. */
router.get('/login', usersController.getLogin);
router.post('/login',usersController.logInUser );
router.get('/logout', usersController.logOutUser);

module.exports = router;
