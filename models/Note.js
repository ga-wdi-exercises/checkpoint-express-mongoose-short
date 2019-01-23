const mongoose = require('../db/connection')
const express = require("express");
const router = express.Router();

const Note = new mongoose.Schema({
    author: "",
    title: "",
    body: ""
})

module.exports = mongoose.model('Note', Note)
