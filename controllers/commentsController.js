const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const Post = require('../models/posts');
const Comment = require('../models/comments');

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
