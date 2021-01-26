const express = require("express")
const {getAllCategory,createCategory} = require("../controller/categoryController")
const router = express.Router()
router.route("/category")
    .get(getAllCategory)
    .post(createCategory)

module.exports = {
    categoryRouter : router
}