const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(require("./routes/index"));

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
