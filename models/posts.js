const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');

const Post = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Schema.Types.Mixed,
    required: true,
  },
  summary: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: new Date()
  }
})

Post.virtual("dateFormatted").get(function(){
  return this.timestamp.toLocaleString(DateTime.DATETIME_MED)
})

Post.set('toJSON', {virtuals: true})

module.exports = mongoose.model("Post", Post);
