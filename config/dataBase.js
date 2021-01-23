const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/ecommercedb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
        console.log("connect to my db...")
    else
        console.log(err.message)
})