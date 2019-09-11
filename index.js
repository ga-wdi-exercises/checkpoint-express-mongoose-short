const express = require('express')
const app = express();
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

const noteRoutes = require("./routes/notes");
const userRoutes = require("./routes/users");

app.use('/notes', noteRoutes);
app.use('/users', userRoutes)


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
