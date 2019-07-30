const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes');

router.get('/', noteController.redirect);
router.get('/notes', noteController.index);
router.get('/notes/:id', noteController.getNoteById);


module.exports = router;