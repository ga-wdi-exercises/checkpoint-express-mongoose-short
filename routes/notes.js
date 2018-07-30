const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notes.js');

router.get("/", notesController.create);
router.get("/notes", notesController.new);
router.get("/notes/:id", notesController.show);


module.exports = router;