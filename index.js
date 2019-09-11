const express = require("express")
const app = express()
const notesController = require("./controllers/notes")
const usersController = require("./controllers/users")

app.use("/", require("./routes/index.js"))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
