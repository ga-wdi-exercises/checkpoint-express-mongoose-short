// const { Note } = require('../models/Note')

// Note.find({}).remove( () => {
//   let john = Note.create({
//     author: 'John Doe',
//   }).then( note => {
//     Promise.all([
//       Note.create({
//       title: 'John\'s Book',
//       body: 'lots of text' 
//       }).then((newNote) => {
//         note.push(newNote)
//       })
//     ]).then(() => {
//       note.save(err => console.log(err))
//     })
//   })
// })