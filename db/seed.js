const users = require("./seedData.json");
const notes = require("./seedData.json");

const userSchema = require(".models/User");
const noteSchema = require(".models/Note");

userSchema
  .find({})
  .remove(() => userSchema.create(users).then(res => console.log(res)));

noteSchema
  .find({})
  .remove(() => noteSchema.create(notes).then(res => console.log(res)));
