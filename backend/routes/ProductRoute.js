const express = require("express");
const {getAllProducts, getSingleProduct} = require("../controller/ProductController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;