const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");
const validator = require("validator");

const ContactMessages = new Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Invalid Email"],
      required: true,
    },
    subjectLine: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    messageDate: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

ContactMessages.virtual("dateFormatted").get(function () {
  return this.messageDate.toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("ContactMessages", ContactMessages);
