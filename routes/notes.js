const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");


router.get("/notes", notesController.index);
router.get("/:id", notesController.show);
router.get("/", notesController.redirect);


module.exports = router;