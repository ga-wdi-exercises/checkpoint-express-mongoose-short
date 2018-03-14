const Note = require("../models/Note")

Note.remove({}).then(() => {
    Promise.all([
        Note.create({
            Author: "someone",
            Title: "something",
            Body: "a;slkdjfalsdkfj"
        })
    ]).then(() => {
        console.log('done')
        process.exit()
    })
})