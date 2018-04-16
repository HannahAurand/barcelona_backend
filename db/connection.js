const mongoose = require('mongoose')

mongoose.Promise = Promise

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/3000')
}

module.exports = mongoose
