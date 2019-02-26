const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");

router.get("/:id", noteController.show);
router.get("/notes", noteController.show);
router.get("/notes/:someParameter", noteController.show);


module.exports = router;
