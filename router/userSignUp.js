const express = require("express")
const {createUser} = require("../controller/userController")
const router = express.Router()
router.route("/user/signup")
    .post(createUser)

module.exports = {
    userSignUpRouter : router
}
