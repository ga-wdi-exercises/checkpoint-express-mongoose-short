const express = require("express");
const router = express.Router();

const Check = require("../models/Note");

router.get("/", (req, res) => {
  res.redirect("/notes");
});
router.get("/notes", (req, res) => {
  Todos.find().then(todos => {
    res.render("notes", { todos }); // if its array of data put curley brackets on around todos
  });
});

module.exports = router;
