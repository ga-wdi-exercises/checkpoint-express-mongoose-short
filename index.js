

const express = require("express");
const router = express.Router();
const hbs = require("hbs");
const app = express()


router.get('/', (req, res) => {
    res.redirect('/notes')
})

router.get('/notes', (req, res) => {
    Note.find({})
      .populate("Note")
      .exec(function(err, Note) {
        res.render("index", Note);
    // res.render('notes', { Note }
})})

router.get('/notes/:id', (req, res) => {
    Note.findOne({_id: req.params.id})
      .populate("author Note.author")
      .exec(function(err, Note) {
       res.render("show", Note);
})})


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
