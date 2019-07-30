const express = require("express");
const router = express.Router();
const controllers = require("../controllers/notes");

router.get("/", controllers.redirect);
router.get("/notes", controllers.noteIndex);
router.get("/users", controllers.userIndex);
router.get("/notes/:note", controllers.showNote);
router.get("/notes/:user", controllers.showUser);


module.exports('router');
