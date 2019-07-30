const express = require("express")
const parser = require("body-parser")
const app = express()


app.use(parser.json())
app.get("/", (req, res) => {
    res.send("Hello World!!")
})

app.use("/notes", require("./routes/notes"));
app.use("/users", require("./routes/users"))
// app.get("../controllers/notes", (req, res) => {
//     res.send("Hello World")
// })
// app.get("/", (req, res) => {
//     res.send('id: ' + req.query.id)
// })




app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
