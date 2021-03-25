var express = require('express');
var router = express.Router();
let apiUsers= require('../../controller/api/usersController');

/* GET  all users */
router.get('/',apiUsers.findUsers);

module.exports = router;
