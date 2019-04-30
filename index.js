const express = require('express');
const parser = require('body-parser');
const noteController = require('./controllers/notes');
const userController = require('./controllers/users');

const app = express();

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.get('/', (req, res) => {
	res.redirect('/api/notes');
});


app.use('/api/note/', noteController);
app.use('/api/user/', userController);

app.set('port', process.env.PORT || 3000);

app.listen(3000, () => console.log('app is running'));

// DO NOT REMOVE THIS LINE:
module.exports = app;
