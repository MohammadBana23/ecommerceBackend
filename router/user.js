const express = require("express")
const {getUser,createUser} = require("../controller/userController")
const router = express.Router()
router.route("/user")
    .get(getUser)
    .post(createUser)

module.exports = {
    userRouter : router
}
