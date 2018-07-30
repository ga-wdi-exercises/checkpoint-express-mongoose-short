const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");

router.get("/", (req, res) => {
    res.redirect("/notes")
})

router.get("/notes", notesController.index);

router.get("/notes/:id", notesController.show);

// router.get("/new", notesController.new);
// router.get("/:id", notesController.show);
// router.put("/:id", notesController.update);
// router.delete("/:id", notesController.delete);

module.exports = router;