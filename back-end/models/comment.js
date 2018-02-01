// Add your comment model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
  userName: String,
  text: String,
  timePosted: Date,
  upVotes: Number,
  downVotes: Number
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
module.exports.Schema =  commentSchema;
