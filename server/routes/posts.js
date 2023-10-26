// INCLUDES POSTS AND COMMENTS
const express = require('express');
const router = express.Router()
const postController = require('../controllers/postsController')
const commentsController = require('../controllers/commentsController')

// NOTE: There are currently no way for readers of the blog to edit their comments
router.get('/', postController.posts);
router.get('/:postId', postController.individual_post)
router.get('/:postId/comments', commentsController.comments)
router.get('/:postId/comments/:commentId', commentsController.individual_comment)

router.post('/create', postController.create_individual_post);
router.post('/:postId/comments/create', commentsController.create_individual_comment);
router.put('/:postId/update', postController.edit_individual_post);
router.put('/:postId/update/visibility', postController.toggle_individual_post_visibility);
router.delete('/:postId/delete', postController.delete_individual_post)
router.delete('/:postId/comments/:commentId/delete', commentsController.delete_individual_comment)





module.exports = router;

