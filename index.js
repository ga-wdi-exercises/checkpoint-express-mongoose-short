const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());


app.use("/users", require("./routes/users"));
app.use("/", require("./routes/notes"));


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app

