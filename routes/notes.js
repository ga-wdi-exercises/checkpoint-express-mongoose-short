const express = require ("express");
const notesController = require ("../controllers/notes");
const router = express.Router;


 router.get("/", notesController.index);
 router.get("/notes", notesController.new);
 router.get("/notes/note1", notesController.create);
 

 module.exports = notes;
