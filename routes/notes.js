const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/notes");

// router.get("/", notesController.index);
router.get("/notes", notesController.new);


module.exports = router;