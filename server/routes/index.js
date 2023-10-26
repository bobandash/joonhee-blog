var express = require('express');
var router = express.Router();
const commentsController = require('../controllers/commentsController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/admin')
});

router.get('/comments', commentsController.get_all_comments);

module.exports = router;
