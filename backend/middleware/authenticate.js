const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");


exports.authorisedUser = catchAsyncErrors(async (req,res,next) =>{
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'not authorized' });
  }

  try {
    const plateDetail = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(plateDetail.id);
    next();
  } catch (err) {
    return res.status(401).json({ error: 'not authorized' });
  }
});
