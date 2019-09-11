const express = require("express")
const Router = express.Router()

const notesController = require("../controllers/notes");
const usersController = require("../controllers/users")

//Note Controller
Router.get("/", notesController.index)
Router.get("/notes", notesController.index)
Router.get("/notes/:id", notesController.show)


//User controllers
Router.get("/users", usersController.index)
Router.get("/users/:id", usersController.show)


module.exports = Router;
// GET '/' which should redirect to `/notes'

// GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id. NOTE You can name :someParameter whatever you want 😬
// GET '/users' which will return a list of all users
// GET '/users/:someParameter which will return a single user by id. NOTE see previous note.