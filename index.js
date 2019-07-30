const express = require("express");
const app = express();
const parser = require("body-parser");
// const notesController = require("./controllers/notes");
const usersController = require("./controllers/users");

app.use(parser.json());

app.use("/notes", require("./routes/notesroute"));
app.use("/users", require("./routes/usersroute"));

//check if the server works
app.get("/", (req, res) => {
  res.redirect("/note");
});

app.listen(3000, () => console.log("app is running"));
// DO NOT REMOVE THIS LINE:
module.exports = app;
