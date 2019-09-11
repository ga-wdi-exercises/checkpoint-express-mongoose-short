const express = require("express");
const app = express();
const notesApp = require("./routes/notes");
const usersApp = require("./routes/users");

app.get("/",  (req, res) => {
    res.send(notesApp);
});
app.get("/notes", (req, res) => {
    res.send(usersApp);
});
app.get("/notes/id", (req, res) => {
    res.send(notesApp);
});
app.get("/list", (req, res) => {
    res.send(usersApp);
});
app.get("/users/id", (req, res) => {
    res.send(usersApp);
});



app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
