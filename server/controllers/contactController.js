const ContactMessages = require('../models/contact');
const {body, validationResult} = require('express-validator');
const asyncHandler = require('express-async-handler');

exports.create_message = [
  body('email', 'Must be a valid email')
    .trim()
    .isEmail()
    .escape(),
  body('subjectLine', 'Message cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  body('message', 'Message cannot be empty')
    .trim()
    .notEmpty()
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if(Object.keys(errors).length > 0){
      res.send(400).json(errors);
    } else {
      const [email, subjectLine, message] = [
        req.params.email,
        req.body.subjectLine,
        req.body.message
      ]
      const newMessage = new ContactMessages({email, subjectLine, message});
      await newMessage.save();
      res.json(newMessage);
    }
  })
]