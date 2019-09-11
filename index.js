const express = require("express");
const app = express();
const parser = require("body-parser")

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
