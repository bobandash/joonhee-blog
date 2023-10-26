const express = require('express');
const router = express.Router()
const commentsController = require('../controllers/commentsController')

router.get('/', commentsController.get_all_comments);

module.exports = router;
