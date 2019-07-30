const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");

router.get("/", notesController.index);
router.get("/notes", notesController.index2);
router.get("/notes/:id", notesController.show);
module.exports = router;
