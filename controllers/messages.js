const express = require("express");
const router = express.Router();
const Note = "../models/Note";

router.get('/:id', (req, res) => {
    Note.findOne({ _id: req.params.id }).then(note) => {
        res.render("views/notes/show")
    }
})

module.exports = router