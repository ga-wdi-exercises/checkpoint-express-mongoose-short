const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");

router.get("/", notesController.create);
router.get("/new", notesController.new);
router.get("/:id", notesController.show);
router.put("/:id", notesController.update);

module.exports = router;
