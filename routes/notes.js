const express = require("express");
const router = express.Router();

const notesController = require("../controllers/notes");

// index to show all notes
router.get("/",notesController.index);
router.get("/:title",notesController.show);

module.exports = router;