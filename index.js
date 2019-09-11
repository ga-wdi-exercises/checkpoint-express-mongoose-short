const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.get("/", (req, res) => {
    res.redirect("/notes")
});

const usersRoutes = require("./routes/users");
const notesRoutes = require("./routes/notes");

app.use("/api/users/", usersRoutes);
app.use("/api/notes/", notesRoutes);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
