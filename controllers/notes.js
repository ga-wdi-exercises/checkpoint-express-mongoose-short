const express = require("express");
const router = express.Router();
const { Item } = require("../models/index");



router.use(require("./user"));

router.use("/item", authenticatedUser, require("./item.js"));

module.exports = router;


