const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

// index to show all notes
router.get("/",userController.index);
router.get("/:title",userController.show);

module.exports = router;