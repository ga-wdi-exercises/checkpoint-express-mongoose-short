const express = require('express');
const app = express();
const router = express.Router();
const parser = require('body-parser')

app.use(parser.json())

router.get('/', function(req, res) {
    res.redirect('/api/notes');
})

router.use('/api/users', require('./controllers/users'));
router.use('/api/notes', require('./controllers/notes'));

app.listen(3000, () => console.log('app is running on'))

// DO NOT REMOVE THIS LINE:
module.exports = app;
