const {categories} = require("../models/category")

const getAllCategory = async (req, res)=>{

    await categories.find().then(result=>{
        if (result !== null){
            res.status(200).send(result)
        }else{
            res.status(401).send()
        }
    }).catch(err=>{
        res.status(500).send({message:err.message})
    })
}


const createCategory = async (req,res)=>{
    const {name,description} = req.body
    const newCategory = {
        name:name,
        description:description
    }

    categories.create(newCategory).then(result => {
        res.status(200).send(result)
    }).catch(err =>{
        res.status(500).send({message:err.message})
    })
}

module.exports = {
    getAllCategory,
    createCategory
}