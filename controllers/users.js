const User = require('../models/User.js')


module.exports = {
    index: (req,res) => {
        User.find({}).then(results => {res.json(results)})
    },
    userId: (req, res) => {
        let id = req.params.id
        User.findOne({ _id: id }).then(results => {
          res.json(results);
        });
      }
    }