const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');
const validator = require('validator')

const ContactMessages = new Schema({
  email: {
    type: String,
    validate: [validator.isEmail, 'Invalid Email'],
    required: true
  },
  subjectLine: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  },
  messageDate: {
    type: Date,
    default: Date.now()
  }
})

ContactMessages.virtual("dateFormatted").get(function(){
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (userTimeZone) {
    return formattedTimestamp = new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    }).format(this.timestamp);
  }
  return this.timestamp.toLocaleString(DateTime.DATE_MED);
})

module.exports = mongoose.model("ContactMessages", ContactMessages);
