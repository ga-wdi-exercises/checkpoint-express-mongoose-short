const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes.js');

router.get('/notes/:id', notesController.show);
router.get('/notes/:id', notesController.showOne);

module.exports = router;
