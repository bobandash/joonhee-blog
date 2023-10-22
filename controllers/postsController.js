const asyncHandler = require('express-async-handler');
const Post = require('../models/posts');

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
