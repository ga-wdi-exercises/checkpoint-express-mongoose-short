const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notes");

router.get("/", noteController.index);
router.get("/notes", noteController.show);
// router.get("/notes/:id", noteController.show);
router.get("/notes/:id", function(req, res) {
  res.render(`/notes/${notes_id}`);
});

module.exports = router;
