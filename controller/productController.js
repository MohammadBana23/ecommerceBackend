const {products} = require("../models/product")
const {ObjectID} = require("mongodb")


const getProductsByCategoryId = async (req, res)=>{

    const categoryId = req.params["id"]
    // const categoryId = req.body.categoryId

    await products.find({categoryId:ObjectID(categoryId)}).then(result=>{
        if (result !== null){
            res.status(200).send(result)
        }else{
            res.status(401).send({message:"products not found"})
        }
    }).catch(err=>{
        res.status(500).send({message:err.message})
    })
}

const createNewProducts = async (req, res)=>{
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
    getAllDigitalProducts: getProductsByCategoryId,
    createNewDigitalProducts: createNewProducts
}