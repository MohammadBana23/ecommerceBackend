const express = require("express")
const {findUser} = require("../controller/userController")
const router = express.Router()
router.route("/login")
    .post(findUser)

module.exports = {
    userLoginRouter : router
}