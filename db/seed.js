// const users = require('./users.json')
// const notes = require('./notes.json')

const User = require('./models/User')
const Note = require('./models/Note')

User.deleteMany({}).then(User.create(user))
Note.deleteMany({}).then(Note.create(notes))


// const shows = require('./shows.json')
// const people = require('./people.json')
// console.log(people)

// const Person = require('./models/Person')
// const Show = require('./models/Show')

// Person.deleteMany({}).then(Person.create(people))
// Show.deleteMany({}).then(Show.create(shows))
