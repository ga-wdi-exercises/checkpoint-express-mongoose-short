const { Note } = require('../models/Note')

module.exports = {
    new: function(req, res) {
        res.render('note/new')
    },
    create: function(req, res) {
        const { author, title, body} = req.body
        Note.create({
            author,
            title,
            body
        }).then(note => {
            res.redirect(`/note/${note._id}`)
        })
    },
    show: function(req, res) {
        Note.findById(req.params.id).then(note => {
            res.render('note/show', { note })
        }) 
    },
    edit: function(req, res) {
        Note.findById(req.params.id).then(note => {
            res.render('note/edit', { note })
        })
    },
    update: function(req, res){
        const {author, title, body} = req.body
        Note.findOneAndUpdate(
            req.params.id,
            {
                author,
                title,
                body
            },
            {
                runValidators: true
            }
        )
        .then(note => {
            res.redirect(`/note/${note.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    },
    delete: function(req, res) {
        Note.remove({_id: req.params.id}).then(note => {
            res.redirect('/')
        })
    }
}