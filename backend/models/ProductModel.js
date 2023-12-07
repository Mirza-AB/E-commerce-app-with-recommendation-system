const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_url: { type: String },
    product_name: { type: String },
    Quantity: { type: Number },
    product_category_tree: { type: String },
    retail_price: { type: Number },
    product_image: { type: String },
    description: { type: String }
})

module.exports = mongoose.model("Product", productSchema);