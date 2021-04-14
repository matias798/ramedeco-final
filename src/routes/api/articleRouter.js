const express = require('express');
const router = express.Router();
const articlePath = "/";
const articleController = require('../../controller/api/articleApiController');

router.get(articlePath,articleController.articles)

module.exports = router