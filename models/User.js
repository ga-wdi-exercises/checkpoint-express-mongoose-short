const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    // Note: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref:"notes"
    //     }
    //   ] 
})

module.exports = mongoose.model('User', userSchema)
