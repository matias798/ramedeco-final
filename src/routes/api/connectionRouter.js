const express = require('express');
const router = express.Router();
const connectionPath = "/";
const connectionController = require('../../controller/api/connectionController');

router.get(connectionPath,connectionController.categories)

module.exports = router