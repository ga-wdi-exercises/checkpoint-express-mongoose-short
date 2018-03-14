const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.post("/", (req, res) => {
  Note.create(req.body).then(notes => {
    res.redirect("/");
  });
});

router.get("/new", (req, res) => {
  res.render("notes/new");
});

router.get("/edit/:id", (req, res) => {
  Note.findOne({ _id: req.params.id }).then(notes => {
    res.render("notes/edit", notes);
  });
});

router.put("/:id", (req, res) => {
  Note.findOneAndUpdate({ _id: req.params.id }, req.body).then(Note => {
    res.redirect("/");
  });
});

router.delete("/:id", (req, res) => {
  Note.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
