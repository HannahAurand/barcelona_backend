const express = require('express')
const router = express.Router()
const path = require('path')
const Info = require('../models/Info')

//--------------------------------------UPLOAD AN IMAGE-----------------------------------------

// /upload is at the top so that it doesn't contradict /:id
router.post('/:id/upload', (req, res, next) => {
  console.log(req)
  let imageFile = req.files.file

  //put the image file in the public folder
  imageFile.mv(`./public/${req.body.filename}.jpg`, function(err) {
    console.log(path.resolve(`./public/${req.body.filename}.jpg`))
    if (err) {
      return res.status(500).send(err)
    }
    //render the image file on the page from the public folder
    res.json({ file: `public/${req.body.filename}.jpg` })
  })
})
//-----------------------------------END IMAGE UPLOAD----------------------------------

// -----------------------------------------COMMENTS CRUD------------------------------------------

//create a comment on a specific page
router.post(':id/comments/add_comment', (req, res) => {
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

//edit a comment on a specific page
router.put('/:id/comments/:id', (req, res) => {
  Info.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json('Comment Updated')
    })
    .catch(error => {
      console.log(error)
    })
})

//delete a specific comment from a specific informational page
router.delete('/:id/comments/:id', (req, res) => {
  Info.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.json('Commented Deleted!')
  })
})

// //-------------------------------------END COMMENT CRUD------------------------------------------------

//access a quiz on a specific page
router.get('/:id/quiz', (req, res) => {
  Info.find({ __id: req.params.id })
    .then(() => {
      res.json('quiz')
    })
    .catch(error => {
      console.log(error)
    })
})

//View a specific informational page (inclues information, images and comments)
router.get('/:id', (req, res) => {
  Info.findById({ __id: req.params.id })
    .then(() => {
      res.json(info)
    })
    .catch(error => {
      console.log(error)
    })
})

//-----------------------------------GET THE HOMEPAGE----------------------------------
router.get('/', (req, res) => {
  Info.find(Info)
    .then(info => {
      res.json(info)
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router
