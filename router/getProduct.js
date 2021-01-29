const express = require("express")
const {getAllDigitalProducts} = require("../controller/productController")
const router = express.Router()
router.route("/product/:id")
    .get(getAllDigitalProducts)

module.exports = {
    getProductsRouter : router
}