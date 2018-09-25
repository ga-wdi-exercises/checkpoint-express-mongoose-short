const express = require("express")
const app = express();
const hbs = require("hbs")

app.set("view engine", "hbs")

app.use(require("./routes.js"));

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
