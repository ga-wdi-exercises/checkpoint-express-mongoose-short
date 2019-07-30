const express = require("express")
const router = express.Router();
const Notes = require("../controllers/Note");



router.get("/", NotesController.index)
router.get("/note",NotesController.index)
router.get("note/:id",NotesController.show)





module.exports =router;








