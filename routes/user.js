const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");

router.get("/", notes.show);
res.render("../notes");

router.get("/notes/:id", notes.show);

module.exports = router;
