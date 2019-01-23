const Notes = require('../models/noteModels')

module.exports = {
    redirect: (req, res) => {
        res.render('/show', Notes)
    },
    show: (req, res) => {
        Notes.find({})
        .populate('title author body')
        .exec(function(err, note) {
            res.render('show', note)
        })
    },
};