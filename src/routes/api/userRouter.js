var express = require('express');
var router = express.Router();
let apiUsers= require('../../controller/api/usersController');

/* GET  all users */
router.get('/',apiUsers.findUsers);

/* GET  all the user detail*/
router.get('/:id',apiUsers.userDetail);

module.exports = router;
