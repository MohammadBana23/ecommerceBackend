const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        unique:true
    },description:{
        type:String
    }
})

const categories = mongoose.model("categories",schema,"categories")
module.exports = {categories}