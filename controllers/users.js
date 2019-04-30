const express = require("express")
const router = express.Router()

const User = require("/Users/tanyaradu/sei/sandbox/checkpoint-express-mongoose-short/models/User.js")

router.get("/", (req,res) =>{
    User.find({}).then(notes =>{
        res.json(notes)
    })
})

router.get("/:someParameter", (req, res) => {
    User.find({"-id": req.params.someParameter}).then(notes =>{
        res.json(notes)
    })
})