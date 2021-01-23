const mongoose = require("mongoose")
const {ObjectID} = require("mongodb")
const schema = new mongoose.Schema({
    title : {
        type:String,
        required:true,
        unique:true
    },description:{
        type:String
    },productId:{
        type:ObjectID,
        required:true
    },userId:{
        type:ObjectID,
        required:true
    }
})

const comments = mongoose.model("comments",schema,"comments")
module.exports = {comments}