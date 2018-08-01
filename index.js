const express = require("express");
const app = express();

app.set('views' __dirname + '/views');
app.set("view engine", "hbs");


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
