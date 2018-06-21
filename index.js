const parser = require('body-parser')
const app = express();
const express = require("express");
const hbs = require("hbs")

app.use(require("./controller/Notes.js"))
app.use(parser.urlencoded({ extended: true }))
app.set("view engine", "hbs");
app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
