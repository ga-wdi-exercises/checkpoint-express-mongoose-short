const Note = require('../models/Note')

Note.find({}).remove(() => {
  Note.create({
    author: 'Jimmy Byess',
    title: 'How to pwn noobs at overwatch',
    body: 'Here is how you pwn noobs, step 1...'
  })
})
