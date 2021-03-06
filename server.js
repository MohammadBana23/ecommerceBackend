require("./config/dataBase")
const express = require("express")
const {createProductsRouter} = require("./router/createProduct")
const {getProductsRouter} = require("./router/getProduct")
const {categoryRouter} = require("./router/category")
const {userSignUpRouter} = require("./router/userSignUp")
const {userLoginRouter} = require("./router/userLogin")
const app = express()
app.use(express.json())


app.use("/api/v1",userLoginRouter)
app.use("/api/v1",userSignUpRouter)
app.use("/api/v1",categoryRouter)
app.use("/api/v1",createProductsRouter)
app.use("/api/v1",getProductsRouter)


app.listen(9797,"192.168.1.50",(err)=>{
    if (!err)
        console.log("run on port 9797")
    else
        console.log("run error")
})