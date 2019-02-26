const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.use(require("./routes/note"));

/*
GET '/' which should redirect to `/notes'
GET '/notes' which render view with a list of notes
GET '/notes/:someParameter' where :someParameter can be used to identify or grab
a single Note from the database. Note: :someParameter is an arbitrary placeholder
name in the description, and the tests will pass if you name it something else.
*/

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/notes", (req, res) => {
  res.render("index", { note });
});

app.get("/notes/id", (req, res) => {
  res.render("index", { id: req.params.id, note });
});

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
