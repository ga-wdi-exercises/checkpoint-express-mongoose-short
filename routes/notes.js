const express = require("express");
const router = express.Router();

const notesController = require("../controllers/notes.js");

//to get list of all notes - - not yet set up
router.get("/notes", notesController.index);

//to get a note by ID - - not yet set up
router.get("/:noteId", notesController.show);


//these probably not needed
// router.get("/new", notesController.new);
// router.post("/", notesController.create);
// 
// router.get("/:id/edit", notesController.edit);
// router.put("/:id", notesController.update);
// router.destroy("/:id", notesController.destroy);

module.exports = router;

