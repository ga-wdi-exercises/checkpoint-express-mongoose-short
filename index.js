const express = require("express")
const parser = require("body-parser")

const app = express();




app.use(parser.urlencoded({extended: true}));
app.use(parser.json())


//Routes 
const Routes = require("./routes/routes")

//
app.use("/api/notes", Routes)

app.listen(3030, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app