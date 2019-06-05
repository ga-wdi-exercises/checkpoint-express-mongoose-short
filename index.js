const express = require("express");
const parser = require("body-parser");

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
