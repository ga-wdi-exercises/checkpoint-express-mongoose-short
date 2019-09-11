const express = require("express")
const router = express.Router()
const notesController = require("../controllers/notes")

router.get("/", notesController.index)
router.get("/:id", notesController.byId)

module.exports = router;