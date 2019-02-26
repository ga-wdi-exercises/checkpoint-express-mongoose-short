const Note = require('../models/Note')

Note.remove({})
  .then(_ => {
    Note.insertMany([{
          author: 'gary',
          title: 'mow lawn',
          body: 'need to mow lawn'
        },
        {
          author: 'scary',
          title: 'mow grass',
          body: 'need to cut grass'
        }

      ])
      .then(notes => {
        console.log(notes)
        process.exit()
      })
  })