const express = require('express')
const router = express.Router()
const path = require('path')
const Info = require('../models/Info')

router.get('/', (req, res) => {
  Info.find()
    .then(info => {
      res.json(info)
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router
