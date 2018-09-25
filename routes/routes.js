const router = require('express').Router();
const Note = require('../models/Note');

router.get('/', (req, res) => {
    console.log(`I'm here`);
    Note.find({}).then(items => res.render('index', {item}));
})

router.post('/note', (req, res) => {
    console.log(`show me`);
    res.render('note/show');
});

// router.post('/note', (req, res) => {
//     Note.create({
//         title: req.title,
//         author:req.author
//     }).then(item => res.redirect(`/`));
// });

module.exports = router;