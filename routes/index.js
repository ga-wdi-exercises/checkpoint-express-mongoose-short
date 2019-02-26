const express = require("express");
const router = express.router();

router.get("/", function (req, res) {
  res.redirect("/notes");
});

router.use(require("./note"));