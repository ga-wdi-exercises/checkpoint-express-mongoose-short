const express = require("express")
const router = express.Router()

const Note = require("../models/Note")
const User = require("../models/User")

router.get("/", (req, res) => {
    User.find({}).then(allusers => res.json(allusers))
})

router.get("/users/:id", (req, res) => {
    User.find({ _id: req.params.id })
      .then(finduser => res.json(finduser))
  })

//tried this and it didnt give me a correct reponse
//   router.get("/:id", (req, res) => {
//     User.find({ _id: req.params.id })
//       .then(finduser => res.json(finduser))
//   })


module.exports = router
