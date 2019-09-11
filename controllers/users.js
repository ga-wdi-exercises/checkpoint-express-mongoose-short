const express = require('express')
const router = express.Router()

const Users = require('../models/User')

router.get("/users", (req,res) => {
    Users.find({}).then(moreUsers =>{
        res.json(moreUsers)
    });
})

    router.get("/users/:username", (req,res) => {
        Users.findOne({
            username: req.params.username
        }).then(moreUsers =>{
            res.json(moreUsers);
        });
    });
    