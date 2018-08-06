const Quest = require("../models/Quest");

module.exports = {
  index: (req, res) => {
      Quest.find({}).then( quests  => {
        res.status(200)
        res.render('index', { quests })
      }).catch(err => {
        console.log('err : ' + err)
      })
  },
  show: (req, res) => {
    Quest.findOne({ _id : req.params.id })
    .then( quest  => {
      res.status(200)
      // quest.url_name = quest.title.toLowerCase().replace(/ /g, "_")
      quest.url_name = quest.title.toLowerCase().replace(/ /g, "+")
      res.render('show', { quest })
    })
    .catch(err => { console.log('err : ' + err)});
  }
}
