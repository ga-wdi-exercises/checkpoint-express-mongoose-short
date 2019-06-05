const express = require("express");
const parser = require("body-parser");
const userController = require("./controllers/users");
const noteController = require("./controllers/notes");

const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use("/api/users", userController);

app.use("/api/notes", noteController);

app.set("port", process.env.PORT || 3000);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
