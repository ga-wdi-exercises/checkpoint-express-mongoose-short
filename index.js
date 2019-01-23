const express = require('express') 
const app = express()
const hbs = require("hbs");
const router = express.Router();

const routes = require("./routes/index")
const parser = require('body-parser')
app.use(parser.urlencoded({ extended: true }))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
