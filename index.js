const express = require("express");
const hbs = require("hbs");
const controller = require("./controllers/checkcontroller");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use("/", controller);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
