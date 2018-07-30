const express = require("express");
const hbs = require("hbs");
const app = express()

app.listen(3000, () => console.log('app is running'))


app.use(require("./routes/notes.js"));

// DO NOT REMOVE THIS LINE:
module.exports = app
