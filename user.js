const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const note = new Schema({
    local: {
      author: "String",
      title: "Stiring",
      body: "String"
    },