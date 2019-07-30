const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.js");

//to get a list of all users - - not yet set up
router.get("/users", usersController.index);

//to get a user by ID - - not yet set up
router.get("/:userId", notesController.show);


module.exports = router;

