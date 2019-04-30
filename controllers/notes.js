const express = require("express")
const router = express.Router()

const Note = require('../models/Note')

router.get("/", (req, res) => {
  console.log('received a request on /')

  Note.find({}).then(allNotes => {
  console.log(allNotes)
  res.json(allNotes)
})
})


router.get("/:_id", (req,res) => {
    let notesID = req.params._id
    Note.findOne({_id: notesID}).then(doc=> {
      res.json(doc)
    })
  })

module.exports = router