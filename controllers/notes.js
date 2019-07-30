const Note = require('../models/Note')

module.exports = {
    index: (req, res) => {
        Note.find({}).then(r => res.json(r)).catch(e=>console.log(e))
    },
    redirect: (req, res) => {
        res.redirect('/notes')
    },
    show: (req, res) => {
        Note.findById({ _id: req.params.id }).then(note => res.json(note)).catch(e => console.log(e))
    }
}