const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users");

// add routes here
router.get("/users",usersController.index);
router.get("/:id",usersController.usersId);


module.exports = router;