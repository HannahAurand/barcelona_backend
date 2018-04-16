const mongoose = require('../db/connection')

const InfoSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
  question: String,
  options: String,
  answer: String
})

const Info = mongoose.model('Info', InfoSchema)

module.exports = Info
