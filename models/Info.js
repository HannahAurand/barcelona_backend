const mongoose = require('../db/connection')

const InfoSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  image: String,
  question: String,
  options: String,
  answer: String,
  comments: []
})

const Info = mongoose.model('Info', InfoSchema)

module.exports = Info
