const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");

router.post("/", noteController.create);
router.get("/new", noteController.new);
router.get("/:id", noteController.show);
router.put("/:id", noteController.update);

module.exports = router;