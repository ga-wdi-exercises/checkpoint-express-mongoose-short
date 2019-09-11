const express = require("express");
const app = express();
const parser =require("body-parser");

const userController=require("./controllers/users");
const notesController=require("./controllers/notes");


app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

app.use('/', notesController)
app.use('/users/', userController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
