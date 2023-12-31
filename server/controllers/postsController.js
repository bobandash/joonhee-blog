const asyncHandler = require("express-async-handler");
const Post = require("../models/posts");
const Comment = require("../models/comments");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const verifyToken = require("../utils/verifyToken");
const multer = require("multer");
const path = require("path");
const { s3Uploadsv2 } = require("../s3Serve");
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new MulterError.MulterError("LIMIT_UNEXPECTED_FILE", false));
  }
};

const upload = multer({ storage, fileFilter });

exports.posts = asyncHandler(async (req, res, next) => {
  if (Object.keys(req.query).length > 0) {
    const { sort, limit, title } = req.query;
    const filter = {};
    if (title) {
      filter.title = {
        $regex: title,
        $options: "i",
      };
    }
    let query = Post.find(filter);
    if (sort) {
      if (sort === "descending") {
        query = query.sort({ timestamp: -1 });
      } else if (sort === "ascending") {
        query = query.sort({ timestamp: 1 });
      }
    }
    if (limit) {
      query = query.limit(Number(limit));
    }
    const posts = await query.exec();
    const postsWithVirtual = posts.map((post) => post.toJSON());
    res.json(postsWithVirtual);
  } else {
    const posts = await Post.find({}).sort({ timestamp: -1 });
    const postsWithVirtual = posts.map((post) => post.toJSON());
    res.json(postsWithVirtual);
  }
});

exports.individual_post = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);
  post = post.toJSON();
  res.json(post);
});

exports.delete_individual_post = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const postId = req.params.postId;
    const postObjectId = new mongoose.Types.ObjectId(postId);
    // delete post deletes post and associated comments
    await Promise.all([
      Post.findByIdAndDelete(postId).exec(),
      Comment.deleteMany({ post: postObjectId }).exec(),
    ]);
    res.sendStatus(204);
  }),
];

/*   title content summary timestamp */
exports.create_individual_post = [
  verifyToken,
  body("title", "Title cannot be empty").trim().notEmpty().escape(),
  body("content", "Content cannot be empty").trim().notEmpty().escape(),
  body("summary", "Summary cannot be empty").trim().notEmpty().escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if (Object.keys(errors).length > 0) {
      res.send(403).json(errors);
    } else {
      const [title, content, summary] = [
        req.body.title,
        req.body.content,
        req.body.summary,
      ];
      const newPost = new Post({ title, content, summary });
      await newPost.save();
      res.json(newPost);
    }
  }),
];

exports.edit_individual_post = [
  verifyToken,
  body("title", "Title cannot be empty").trim().notEmpty().escape(),
  body("content", "Content cannot be empty").trim().notEmpty().escape(),
  body("summary", "Summary cannot be empty").trim().notEmpty().escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if (Object.keys(errors).length > 0 === 0) {
      res.json(errors);
    } else {
      const postId = req.params.postId;
      const [title, content, summary] = [
        req.body.title,
        req.body.content,
        req.body.summary,
      ];
      await Post.findByIdAndUpdate(postId, {
        title,
        content,
        summary,
      });
      const newPost = await Post.findById(postId);
      res.json(newPost);
    }
  }),
];

exports.toggle_individual_post_visibility = [
  verifyToken,
  asyncHandler(async (req, res, next) => {
    const postId = req.params.postId;
    const currentPostVisibility = (await Post.findById(postId)).isVisible;
    await Post.findByIdAndUpdate(postId, {
      isVisible: !currentPostVisibility,
    });
    const newPost = await Post.findById(postId);
    res.json(newPost);
  }),
];

exports.add_image_to_server = [
  verifyToken,
  upload.single("image"),
  asyncHandler(async (req, res, next) => {
    try {
      const file = req.file;
      console.log(file);
      const result = await s3Uploadsv2(file);
      console.log(result);
      res.json({ data: { url: result } });
    } catch (error) {
      console.error("Error during image upload:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }),
];
