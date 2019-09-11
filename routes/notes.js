const express = require("express");
const router = express.Router();

// add controller here
const notesController = require("../controllers/notes");

// add routes
// show all notes

router.get("/", notesController.index);

// get a list of notes

router.get('/notes', notesController.showNotes);

// get notes based on authoer
router.post("/notes/:email", notesController.emailNotes);


// export the router
module.exports = router; 