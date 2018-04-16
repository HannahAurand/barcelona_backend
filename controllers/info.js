const express = require('express')
const router = express.Router()
const path = require('path')
const Info = require('../models/Info')

router.get('/', (req, res) => {
  Info.find(Info)
    .then(info => {
      res.json(info)
    })
    .catch(error => {
      console.log(error)
    })
})

//create a comment on a specific page
router.post(':id/add_comment', (req, res) => {
  Info.create({
    name: req.body.name,
    comment: req.body.about,
    timestamp: req.body.timestamp
  })
    .then(() => {
      comment.save()
    })
    .then(() => {
      res.json('Comment Added!')
    })
})

router
  .get(':id/quiz', (req, res) => {
    Info.find({ __id: req.params.id })
  })
  .then(() => {
    res.json(Info)
  })
  .catch(error => {
    console.log(error)
  })

module.exports = router
