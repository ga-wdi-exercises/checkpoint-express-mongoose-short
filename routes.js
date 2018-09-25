const express = require('express')
const router = express.Router()
const Note = require('./models/Note')


router.get('/', (req, res) => {
    Note.find().then( notes => res.render('index', { notes }));
  });
router.get('/views/:id/', (req,res ) =>{
    Item.findById(req.params.id).then(item=> {
        res.render("views/show", {item})
    })
})




module.exports = router;