const express = require("express")
const router = express.Router()

const User = require('../models/User')

router.get("/", (req, res) => {
  console.log('received a request on /')

  User.find({}).then(allUsers => {
  console.log(allUsers)
  res.json(allUsers)
})
})

router.get("/:_id", (req,res) => {
    let usersID = req.params._id
    User.findOne({_id: usersID}).then(doc=> {
      res.json(doc)
    })
  })

module.exports = router