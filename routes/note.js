const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");

router.post("/", noteController.create);
router.get("/:id", noteController.show);
router.delete("/:id", noteController.delete);

module.exports = router;
