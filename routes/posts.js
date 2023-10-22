// INCLUDES POSTS AND COMMENTS
const express = require('express');
const router = express.Router()
const postController = require('../controllers/postsController')
const commentsController = require('../controllers/commentsController')

router.get('/', postController.posts);
router.get('/:postId', postController.individual_post)
router.get('/:postId/comments', commentsController.comments)
router.get('/:postId/comments/:commentId', commentsController.individual_comment)






module.exports = router;

