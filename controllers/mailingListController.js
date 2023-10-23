// subscribe and unsubscribe
const {body, validationResult} = require('express-validator');
const asyncHandler = require('express-async-handler');
const MailingList = require('../models/mailing-list')


exports.subscribe_mailing_list = [
  body('email', 'Must be a valid Email')
    .trim()
    .isEmail()
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).mapped();
    if(errors.size > 0){
      res.json(errors);
    } else {
      // if email exists, then update subscribed status
      const email = await MailingList.findOne({email: req.body.email});
      if(email){
        await email.updateOne({
          subscribed: true,
        })
        res.sendStatus(204);
      } else {
        const newEmail = new MailingList({
          email: req.body.email
        });
        await newEmail.save();
        res.json(newEmail);
      }
    }
  })
]

exports.unsubscribe_mailing_list = asyncHandler(async (req, res, next) => {
  const emailId = req.params.emailId;
  await MailingList.findByIdAndUpdate(emailId, {
    subscribed: false
  });
  res.sendStatus(204);
})