const express = require("express");
const router = express.Router();

const usersController = require('../controllers/users')
//  get all users

router.get("/users", usersController.showUsers);

//find user by name

router.get("/users/:username", usersController.userName);

module.exports = router; 