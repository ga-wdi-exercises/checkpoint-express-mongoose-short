const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/notes");
});
router.use("/notes", require("./notes"));

module.exports = router;
