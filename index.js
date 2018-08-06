const express = require('express')
const hbs = require('hbs')
const questsController = require("./controllers/quests")
const Notes = require("./models/Quest")
const app = express()
const router = express.Router()



app.set('views', __dirname + '/views');
app.set("view engine", "hbs")
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");


app.get("/", (req, res) => {
  res.redirect('/quests')
})

app.get("/quests", questsController.index)
// app.get("/quests", (req, res) => {
//   res.send('test2')
// })


app.get("/quest/:id", questsController.show)

app.listen(3000, () => console.log('app is running'))
app.use(require("better-express-errors")(app))


// DO NOT REMOVE THIS LINE:
module.exports = app
