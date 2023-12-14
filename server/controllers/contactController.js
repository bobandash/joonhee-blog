const ContactMessages = require("../models/contact");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.create_message = [
  body("email", "Must be a valid email").trim().isEmail().escape(),
  body("subjectLine", "Message cannot be empty").trim().notEmpty().escape(),
  body("message", "Message cannot be empty").trim().notEmpty().escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    } else {
      const { email, subjectLine, message } = req.body;
      const newMessage = new ContactMessages({ email, subjectLine, message });
      await newMessage.save();
      return res.status(200).json(newMessage);
    }
  }),
];
