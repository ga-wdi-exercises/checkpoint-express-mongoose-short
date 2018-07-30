const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notes");

router.post("/", noteController.create)
router.get("/new", noteController.new)
router.get("/:id", noteController.show);


module.export = router