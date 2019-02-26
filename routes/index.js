const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/", function(req, res) {
  res.render("index");
});
router.get("/notes", function(req, res) {
  res.render("show");
});
router.use("/notes", require("./notes"));
module.exports = router;
