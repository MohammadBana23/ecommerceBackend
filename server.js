require("./config/dataBase")
const express = require("express")
const {userRouter} = require("./router/user")
const app = express()
app.use(express.json())


app.use("/api/v1/",userRouter)


app.listen(9797,"192.168.1.50",(err)=>{
    if (!err)
        console.log("run on port 9797")
    else
        console.log("run error")
})