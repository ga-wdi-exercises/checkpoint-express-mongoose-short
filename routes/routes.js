const express = require("express")
const Router = express.Router()

const notesController = require("./controllers/notes");
const usersController = require("./contollers/users")


Router.get("/", notesController)
Router.get("/:notes", notesController.index)
Router.get("/", usersController.index)



// GET '/' which should redirect to `/notes'
// GET '/notes' which return a list of notes
// GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id. NOTE You can name :someParameter whatever you want 😬
// GET '/users' which will return a list of all users
// GET '/users/:someParameter which will return a single user by id. NOTE see previous note.