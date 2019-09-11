const express = require('express');
const router = express.Router();

const User=require("../models/User"); 

router.get("/", (req,res)=>{
    User.find({}).then(user=>res.json(user))
})

router.get("/:id",(req,res)=>{
    User.findById({id:req.params.id}).then(user=>res.json(user))
})