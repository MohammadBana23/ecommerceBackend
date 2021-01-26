const {users} = require("../models/user")
const findUser = async (req,res) => {
        const {username,password} = req.body
        await users.findOne({username:username,password:password}).then(result=>{
            if (result !== null){
                res.status(200).send(result)
            }else{
                res.status(401).send()
            }
        }).catch(err=>{
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