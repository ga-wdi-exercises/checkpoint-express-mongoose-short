const express = require('express')
const router = express.Router()
const User = require('../models/User')

// GET '/' which should redirect to `/notes'
// GET '/notes' which return a list of notes
// GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id.
// GET '/users' which will return a list of all users
// GET '/users/:someParameter which will return a single user by id
// // List all Users/people
router.get('/users', (req, res) => {
  User.find({}).then(allUsers => {
    console.log(allUsers)
    res.json(allUsers)
  })
})
// // List a single User/person by id
router.get('/users/:id', (req, res) => {
  User.find({ _id: req.params.id }).then(objectbyID => res.json(objectbyID))
})

module.exports = router
