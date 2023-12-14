const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

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
    required: true,
  },
  timestamp: {
    type: Date,
    default: () => Date.now(),
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
});

Post.virtual("dateFormatted").get(function () {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (userTimeZone) {
    console.log(userTimeZone);
    return (formattedTimestamp = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      timeZone: userTimeZone,
    }).format(this.timestamp));
  }
  return this.timestamp.toLocaleString(DateTime.DATE_MED);
});

Post.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Post", Post);
