const mongoose = require('../db/connection')

const CommentSchema = new mongoose.Schema({
  name: String,
  comment: String
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
