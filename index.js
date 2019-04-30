const express = require('express');
const app = express();
const noteRouter = require('./Routes/noteRouter.js');
const userRouter = require('./Routes/userRouter.js');

app.use('/', (req, res) => {
	res.redirect('/notes');
});
app.use('/notes', noteRouter);
app.use('/users', userRouter);

app.listen(3000, () => console.log('app is running'));

// DO NOT REMOVE THIS LINE:
module.exports = app;
