require("./config/dataBase")
const express = require("express")
const {categoryRouter} = require("./router/category")
const {userSignUpRouter} = require("./router/userSignUp")
const {userLoginRouter} = require("./router/userLogin")
const app = express()
app.use(express.json())


app.use("/api/v1/user",userLoginRouter)
app.use("/api/v1/user",userSignUpRouter)
app.use("/api/v1/user",categoryRouter)


app.listen(9797,"192.168.43.217",(err)=>{
    if (!err)
        console.log("run on port 9797")
    else
        console.log("run error")
})