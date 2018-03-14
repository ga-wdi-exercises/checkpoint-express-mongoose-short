const express = require("express");
const hbs = require("hbs")
const app = express()
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const noteController = require("./controllers/notes")

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))


app.get("/", (req, res) => {
   res.render("index")
})


app.use('/notes', noteController)


app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
