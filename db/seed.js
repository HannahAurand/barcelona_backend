const Info = require('../models/Info')
const seedData = require('./seeds')

Info.remove({})
  .then(() => {
    return Info.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
