const express = require("express");
const parser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())


//temp app
app.get("/", function(req, res) {
  
  res.send("hello world");
  
});

app.use(cors())

// possible first app - redirect to notes - -still crashes nodemon
// app.get("/", (req, res) => {
//     res.redirect(“/routes/notes);
//   });




//not yet set up and not sure if needed
// app.use(“/notes", require("./routes/notes"));
// app.use(“/users", require("./routes/users"));


app.listen(3000, () => console.log('app is running'))


// DO NOT REMOVE THIS LINE:
module.exports = app
