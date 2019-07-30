const express = require("express")
const router = express.Router();

const NotesController = require("../controllers/notes")



router.get("/", NotesController.redirect)
router.get("/notes",NotesController.index)
router.get("/notes/:id",NotesController.show)





module.exports =router;








