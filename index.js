const express = require("express");
const app = express();
const parser = require("body-parser");
const noteController = require("./controllers/notes");
const userController = require("./controller/users");

app.use(parser.urlincoded({ extended: true }));
app.use(parser.json());

app.use("/api/notes", noteController);
app.use("/api/users", userController);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
