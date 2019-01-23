const express = require("express");
const hbs = require("hbs");

const app = express();
hbs.registerHelper("log", function(data) {
  let context = { ...data };
  delete context.settings;
  delete context.body;
  console.log(context);
  return JSON.stringify(context);
});
app.use(express.static("public"));
app.set("view engine", "hbs");

app.use(require("./routes/application.js"));

app.listen(3000, () => console.log('app is running'))

{ useNewUrlParser: true }

// DO NOT REMOVE THIS LINE:
module.exports = app
