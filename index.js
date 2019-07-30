const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.get("/", (req, res) => res.send("hello world"))

app.listen(3001, () => console.log('app is running on port 3001!'));


// DO NOT REMOVE THIS LINE:
module.exports = app
