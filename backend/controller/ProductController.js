const Product = require("../models/ProductModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 15;
    const currentPage = Number(req.query.page) || 1;
    const keyword = req.query.keyword ? {
      product_name: {
        $regex: req.query.keyword,
        $options: "i"
      }
    } : {};
    const skip = resultPerPage * (currentPage - 1);

    const productsCount = await Product.countDocuments();
    const products = await Product.find({...keyword}).limit(resultPerPage).skip(skip);

    res.status(200).json({
      success: true,
      products,
      productsCount,
      resultPerPage,
    });
});


// single Product details
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    console.log("No product is found with the given ID");
  }
  res.status(200).json({
    success: true,
    product,
  });
});