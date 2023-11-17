const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');

const Comment = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
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
    default: () => Date.now()
  },
}, {
  toJSON: {virtuals: true}
});

Comment.virtual("dateFormatted").get(function(){
  return this.timestamp.toLocaleString(DateTime.DATE_MED)
})

module.exports = mongoose.model("Comment", Comment);
