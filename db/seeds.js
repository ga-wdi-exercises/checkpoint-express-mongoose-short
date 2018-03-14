const Note = require('../models/Note')

Note.remove({}).then(() => {
    Promise.all([
      Note.create({
        title: 'Title'
        author: 'author'
        body: 'body'
    ]).then(() => {
      console.log('done')
      process.exit()
    })
  })