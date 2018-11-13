const express = require("express");
const hbs = require("hbs");
// const mongoose = require("mongoose");
const mongoose = require("./db/connection");
const bodyParser = require("body-parser");
const notes = require("./controllers/notes");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use("/", notes);
app.listen(3000, () => console.log("app is running"));

module.exports = app;
