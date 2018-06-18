const app = require('express')
// const indexController = require('./controllers/index')

app.use(require('./routes/index'))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
