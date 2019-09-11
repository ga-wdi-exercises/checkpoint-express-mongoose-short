const mongoose = require('mongoose')


mongoose.Promise = Promise
const mongoURI = "mongodb://localhost/notes-checkpoint"

mongoose
.connect(mongoURI, { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose


