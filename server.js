require("./config/dataBase")
const express = require("express")
const {categories} = require("./models/category")
const {categoryRouter} = require("./router/category")
const app = express()
app.use(express.json())


app.use("/api/v1/",categoryRouter)


app.listen(9797,"192.168.1.50",(err)=>{
    if (!err)
        console.log("run on port 9797")
    else
        console.log("run error")
})