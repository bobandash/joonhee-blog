const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');
const validator = require('validator')

const mailingList = new Schema({
  email: {
    type: String,
    default: "Anonymous Poster",
    validate: [validator.isEmail, 'Invalid Email']
  },
  subscribed: {
    type: Boolean,
    default: true,
  },
  subscribedDate: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model("Mailing List", mailingList);
