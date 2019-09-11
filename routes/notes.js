const express = require("express");
const notesRouter = express.Router();
const notesController = require("../controllers/notes");

notesRouter.get("/notes", notesController.index);
notesRouter.get("/notes/:id", notesController.show);

module.exports = notesRouter;