const express = require("express")
const {createNewDigitalProducts} = require("../controller/productController")
const router = express.Router()
router.route("/product")
    .post(createNewDigitalProducts)

module.exports = {
    createProductsRouter:router
}