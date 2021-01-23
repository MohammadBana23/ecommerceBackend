const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
        unique:true
    },password : {
        type:String,
        required:true
    }
})

const users = mongoose.model("users",schema,"users")
module.exports = {users}