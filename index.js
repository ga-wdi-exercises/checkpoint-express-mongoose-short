const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"))

app.set("view engine", "hbs");

app.use(require("./routes/index.js"));

app.listen(3001, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
