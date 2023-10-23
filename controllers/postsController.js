const asyncHandler = require('express-async-handler');
const Post = require('../models/posts');
const Comment = require('../models/comments')
const mongoose = require('mongoose');
const {body, validationResult} = require('express-validator');

exports.posts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find({}).sort({timeStamp: -1})
  const postsWithVirtual = posts.map(post => post.toJSON())
  res.json(postsWithVirtual);
})

exports.individual_post = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId
  let post = await Post.findById(postId)
  post = post.toJSON();
  res.json(post);
})

exports.delete_individual_post = asyncHandler(async(req, res, next) => {
  const postId = req.params.postId;
  const postObjectId = new mongoose.Types.ObjectId(postId);
  // delete post deletes post and associated comments
  await Promise.all([
    Post.findByIdAndDelete(postId).exec(),
    Comment.deleteMany({post: postObjectId}).exec()
  ])
  res.sendStatus(204);
})

/*   title content summary timestamp */
exports.create_individual_post = [
  body('title', 'Title cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  body('content', 'Content cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  body('summary', 'Summary cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if(errors.size === 0){
      res.json(errors);
    } else {
      const [title, content, summary] = [
        req.body.title,
        req.body.content,
        req.body.summary
      ]
      const newPost = new Post({title, content, summary});
      await newPost.save();
      res.json(newPost);
    }
  })
]


exports.edit_individual_post = [
  body('title', 'Title cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  body('content', 'Content cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  body('summary', 'Summary cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if(errors.size === 0){
      res.json(errors);
    } else {
      const postId = req.params.postId;
      const [title, content, summary] = [        
        req.body.title,
        req.body.content,
        req.body.summary
      ]
      await Post.findByIdAndUpdate(postId, {
        title, content, summary
      })
      const newPost = await Post.findById(postId);
      res.json(newPost);
    }
  })
]
