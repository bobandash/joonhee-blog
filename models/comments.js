const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');

const Comment = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Posts"
  },
  username: {
    type: String,
    default: "Anonymous Poster"
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: new Date()
  }
})

comments.virtual("dateFormatted").get(function(){
  this.timestamp.toLocaleString(DateTime.DATETIME_MED)
})

module.exports = mongoose.model("Comments", Comment);
