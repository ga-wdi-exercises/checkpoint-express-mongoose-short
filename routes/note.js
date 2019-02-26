const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note");

router.get("/notes", noteController.getNotes);
router.get("/notes/:id", noteController.getNoteByID);