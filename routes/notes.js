const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes');

router.get('/', noteController.index);
router.get('/notes', noteController.showNotes);
router.get('/notes/:notes', noteController.getNoteById);
