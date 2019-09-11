const express = require("express");
const app = express();
const parser = require("body-parser")
const usersRoutes = require("./routes/usersRoutes")
const notesRoutes = require("./routes/notesRoutes")

app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

app.use("/api/users/", usersRoutes)
app.use("/api/notes/", notesRoutes)



app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
