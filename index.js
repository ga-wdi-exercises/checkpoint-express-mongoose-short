const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(require("./routes/index"));


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
