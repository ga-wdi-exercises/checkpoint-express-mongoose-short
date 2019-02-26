const express = require('express')
const app = express()
const router = require("./controllers/note")

app.set("view engine","hbs")

app.get("/", function(req,res){
    res.redirect("/notes")
})

app.get("/notes", router.index)

app.get("/notes/:id", router.show)


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
