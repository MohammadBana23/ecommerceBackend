const {users} = require("../models/user")
const findUser = async (req,res) => {
        const {username,password} = req.body
        await users.findOne({username:username,password:password}).then(result=>{
            res.status(200).send(result)
        }).cache(err=>{
            res.status(500).send({message:err.message})
        })
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
    findUser,
    createUser
}