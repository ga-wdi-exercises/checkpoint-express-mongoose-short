const express = require("express");
const parser = require("body-parser");

const notesController = require("./controllers/notes");
const usersController = require("./controllers/users");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/", notesController);
app.use("/", usersController);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
