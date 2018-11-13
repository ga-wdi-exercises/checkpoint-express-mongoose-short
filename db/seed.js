const Note = require("../models/Note");

Note.find({}).remove(() => {
    let forMeTheBell = Note.create({
        author: "George",
        title: "For Me The Bell Tolls",
        body: "6pack with a side of french fries"
    })
    let TheOneTooMany = Note.create({
        author: "Jeff",
        title: "The One Too Many Book",
        body: "Where you gone go when the going gets tough?"
    })
    let InMyWineSellar = Note.create({
        author: "Betty",
        title: "In My Wine Sellar",
        body: "It's cold as shit down there. The End."
    })
})

