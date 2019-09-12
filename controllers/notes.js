module.exports = {index: (req, res) => {
    Note.find({}).then(output => res.json(output))
},
search: (req, res) => {
    Note.findOne({ _id: req.params.id }).then(output => res.json(output))
},
} 