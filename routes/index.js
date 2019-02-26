const express = require("express");
const router = express.Router();
const Note = require("../models/index");
const noteController = require("../controllers/note");

router.get("/", (req, res) => {
  Note.find({}).then(items => {
    res.render("index", {
      items
    });
  });
});

router.get("/new", noteController.new);
router.module.exports = router;

// GET '/' which should redirect to `/notes'
// GET '/notes' which render view with a list of notes
// GET '/notes/:someParameter' where :someParameter can be used to identify or grab a single Note from the database. Note: :someParameter is an arbitrary placeholder name in the description, and the tests will pass if you name it something else.
