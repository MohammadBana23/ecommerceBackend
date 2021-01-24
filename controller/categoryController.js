const {categories} = require("../models/category")

const getCategory = async (req,res)=>{

    if (req.query["id"]){
        const {id} = req.query
        const result = await categories.findOne({_id:id})
        res.status(200).send(result)
    }else {
        const result = await categories.find({})
        res.status(200).send(result)
    }
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
    getCategory,
    createCategory
}