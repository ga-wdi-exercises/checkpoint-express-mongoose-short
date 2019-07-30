const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.js");

//to get a list of all users - - not yet set up
router.get("/users", usersController.index);

//to get a user by ID - - not yet set up
router.get("/:uersId", notesController.show);




//these probably not needed 

// router.get("/new", usersController.new);
// router.post("/", usersController.create);
// router.get("/:id", usersController.show);
// router.get("/:id/edit", usersController.edit);
// router.put("/:id", usersController.update);
// router.destroy("/:id", usersController.destroy);

module.exports = router;

