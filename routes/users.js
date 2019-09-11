const express = require("express");
const router = express.Router();

const usersController = require('../controllers/users')
//  get all users

router.get("/users", usersController.showUsers);

//Update: update a specific bookmark 

router.get("/users/:name", usersController.userName);

module.exports = router; 