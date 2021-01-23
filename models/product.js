const mongoose = require("mongoose")
const {ObjectID} = require("mongodb")
const schema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        unique:true
    },description:{
        type:String
    },rate:{
        type:Number
    },price:{
        type:Number,
        required:true
    },isAvailable:{
        type:Boolean,
        required:true,
        default:true
    },categoryId:{
        type:ObjectID,
        required:true
    }
})

const products = mongoose.model("products",schema,"products")
module.exports = {products}