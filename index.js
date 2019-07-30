const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

// app.use("/api/people", require("./routes/person"));
// app.use("/api/show", require("./routes/show"));

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
