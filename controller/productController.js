const {products} = require("../models/product")
const getAllDigitalProducts = async (req, res)=>{

    await products.find().then(result=>{
        if (result !== null){
            res.status(200).send(result)
        }else{
            res.status(401).send()
        }
    }).catch(err=>{
        res.status(500).send({message:err.message})
    })
}

const createNewDigitalProducts = async (req,res)=>{
    const {name,description,rate,price,isAvailable,categoryId} = req.body
    const newDigitalProducts = {
        name:name,
        description:description,
        rate:rate,
        price:price,
        isAvailable:isAvailable,
        categoryId:categoryId
    }

    products.create(newDigitalProducts).then(result => {
        res.status(200).send(result)
    }).catch(err =>{
        res.status(500).send({message:err.message})
    })
}

module.exports = {
    getAllDigitalProducts,
    createNewDigitalProducts
}