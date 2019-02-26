const express = require("express");
const app = express();
app.listen(3000, () => console.log('app is running'))


app.use(require("./routes/index"));

// DO NOT REMOVE THIS LINE:
module.exports = app
