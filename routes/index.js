const express = require("express");
const router = express.Router();
const { Note } = require("../models/index");

router.get('/', (req, res) => {
    
});

router.get("/", authenticatedUser, function(req, res) {
  Note.find({})
    .sort({ priority: "asc" })
    .then(items => {
      res.render("index", { items, success: req.flash("success") });
    });
});

router.use(require("./user"));

router.use("/item", authenticatedUser, require("./item.js"));

module.exports = router;


