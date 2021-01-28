const express = require("express")
const {getAllDigitalProducts,createNewDigitalProducts} = require("../controller/productController")
const router = express.Router()
router.route("/product")
    .get(getAllDigitalProducts)
    .post(createNewDigitalProducts)

module.exports = {
    digitalProductsRouter:router
}