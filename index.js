const express = require('express');
const app = express();
const router = require('./routes/routes.js');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
});

app.use(router);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
