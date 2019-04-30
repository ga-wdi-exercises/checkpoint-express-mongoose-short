const express = require("express")
const router = express.Router()

const Notes = require("/Users/tanyaradu/sei/sandbox/checkpoint-express-mongoose-short/models/Note.js")

router.get("/", (req,res) =>{
    Notes.find({}).then(notes =>{
        res.json(notes)
    })
})

router.get("/:someParameter", (req, res) => {
    Notes.find({"_id": req.params.someParameter}).then(notes =>{
        res.json(notes)
    })
})
module.exports = router