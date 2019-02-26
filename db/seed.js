const Note = require('../models/Note')

Note.find({}).remove(() =>{
    Note.create({
        title: "A Modest Proposal",
        author: "Jonathan Swift",
        body: "Here's a thought: have you considered eating babies?"
    })

    Note.create({
        title: "FYI",
        author: "Awesome Blossom the Opossum",
        body: "I can eat 5000 ticks a year and don't carry Lyme Disease OR rabies."
    })

    Note.create({
        title: "Facilities Update",
        author: "The offstage janitor",
        body: "Please do not mind the lagoon forming in the lobby. We are taking care of it as soon as pest control removes the kracken."
    })
})