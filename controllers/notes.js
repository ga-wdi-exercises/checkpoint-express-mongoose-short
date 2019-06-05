const express = require("express");
const router = express.Router();
const Note = require('../models/Note')

router.get("/", (req, res) => {
    Note.find({}).then(note => {
        res.json(note)
    })

})


router.get("/:info", (req, res) => {
    let information = req.params.id
    Note.findOne({ _id: information }).then(showInfo => {
        res.json(showInfo)
    })
})

// router.post("/new", (req, res) => {
//         Note.create(req.body).then(note => res.json(note))
//     })
/* 
You should have 5 routes. They should return JSON unless otherwise specified.

GET '/' which should redirect to `/notes'
GET '/notes' which return a list of notes
GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id. NOTE You can name :someParameter whatever you want 😬
GET '/users' which will return a list of all users
GET '/users/:someParameter which will return a single user by id. NOTE see previous note.
 */





module.exports = router;