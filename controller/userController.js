const {users} = require("../models/user")
const getUser = async (req,res) => {

    if (req.query["id"]){
        const {id} = req.query
        const result = await users.findOne({_id:id})
        res.status(200).send(result)
    }else {
        const result = await users.find({})
        res.status(200).send(result)
    }
}

const createUser = async (req,res) => {
    const {username,password} = req.body
    const newUser = {
        username:username,
        password:password
    }
    users.create(newUser).then(result=>{
        res.status(200).send(result)
    }).catch(err => {
        res.status(500).send({message:err.message})
    })
}

module.exports = {
    getUser,
    createUser
}