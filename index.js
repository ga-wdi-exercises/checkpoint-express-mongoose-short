const express = require("express");
const hbs = require("hbs");
let app = express()

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
