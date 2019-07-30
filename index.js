const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.json());





app.use("/note", require("./routes/Note"))
app.use("/user", require("./routes/User"))














app.listen(3000, () => console.log('app is running'))



// DO NOT REMOVE THIS LINE:
module.exports = app
