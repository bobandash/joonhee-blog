const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const Filter = require('bad-words')
const Post = require('../models/posts');
const Comment = require('../models/comments');
const verifyToken = require('../utils/verifyToken')


exports.comments = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const objectPostId = new mongoose.Types.ObjectId(postId);
  const postComments = await Comment.find({
    post: objectPostId
  })
  const postCommentsJSON = postComments.map(postComment => postComment.toJSON())
  res.json(postCommentsJSON);
})


exports.individual_comment = asyncHandler(async (req, res, next) => {
  const commentId = req.params.commentId;
  let comment = await Comment.findById(commentId)
  comment = comment.toJSON();
  res.json(comment);
})

exports.create_individual_comment = [
  verifyToken, 
  body('message', 'Message cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if(Object.keys(errors).length > 0){
      res.json(errors);
    } else {
      const filter = new Filter();
      const [post, username, message] = [
        req.params.postId,
        filter.clean(req.body.username),
        filter.clean(req.body.message)
      ]
      const newComment = username === '' ? new Comment({post, message}) : new Comment({post, username, message});
      await newComment.save();
      res.json(newComment);
    }
  })
]

exports.delete_individual_comment = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const commentId = req.params.commentId;
    await Comment.findByIdAndDelete(commentId);
    res.sendStatus(204);
  })
]

exports.get_all_comments = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const comments = await Comment.find({}).populate('post');
    res.json(comments);
  })
]