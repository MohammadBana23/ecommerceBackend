const express = require("express")
const mongoose = require("mongoose")
const {category} = require("./models/category")
const app = express()
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/onlineshop",
    {useNewUrlParser : true,autoIndex:false},
    (err)=>{
        if(!err)
            console.log("connect to my db...")
        else
            console.log(err.message)
})

app.post("/api/v1/category",(req,res) =>{
    const name = req.body["name"]


    const newUser = {
        name : name,
    }

    category.create(newUser).then(response=>{
        console.log(response)
        res.status(201).send({
            message:"user created..."
        })
    }).catch(err=>{
        console.log(err.message)
        res.status(404).send({
            message:"back end am error dad"
        })
    })
})


app.listen(9898,(err)=>{
    if (!err)
        console.log("run on port 9898")
    else
        console.log("run error")
})