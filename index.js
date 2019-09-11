const express = require("express")

// DO NOT REMOVE THIS LINE:
module.exports = app

//Routes 
const Routes = require("./routes/routes")


app.use("/api/routes", Routes)

app.listen(3000, () => console.log('app is running'))