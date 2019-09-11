const express = require('express');
const router = express.Router();
const notesController = require("../controllers/notes");

// add routes here
router.get("/",notesController.index);
router.get("/notes",notesController.notesList);
router.get("/:id",notesController.notesId);


module.exports = router;