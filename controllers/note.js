const { Note } = require('../models/Note')

module.exports = {
    show: (req, res) => {
        Note.findOne({_id: req.params.id})
        .populate('author')
        .exec(function(err, note) {
            res.render("note/show", note)
        })
    }
}