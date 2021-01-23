const express = require("express")
const {getCategory,createCategory} = require("../controller/categoryController")
const router = express.Router()
router.route("/category")
    .get(getCategory)
    .post(createCategory)

module.exports = {
    categoryRouter : router
}