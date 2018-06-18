const Note = require('../models/notes')

module.exports = {
    index: (req, res) => {
        //res.render('index')
        Note.find({})
        .sort({dateCreated: -1})
        .limit(10)
        .populate(author)
        .then(notes => {
            res.render('index')
        })
    },
    show: (req, res) => {
        Note.findById({
            
        })
        res.render('show')
    }
}