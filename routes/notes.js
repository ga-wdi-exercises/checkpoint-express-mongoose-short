const express = require('express');
const notesRouter = express.Router();

const notesController = require('../controllers/notes');

notesRouter.get('/', notesController.index);
notesRouter.get('/:id', notesController.search);

module.exports = notesRouter;