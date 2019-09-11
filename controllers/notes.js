const Note = require('../models/Note');

module.exports = {
    index: (req, res) => {
        Note.find({}).then(output => res.json(output))
    },
}