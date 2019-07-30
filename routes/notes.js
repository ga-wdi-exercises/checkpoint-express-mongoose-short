const express = require("express")
const router = express.Router()
const notesController = require("../controllers/notes")

router.get("/", notesController.index);
router.get("/notes", notesController.index);
router.get("/:id", notesController.show);


module.exports = router;