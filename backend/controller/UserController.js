const User = require("../models/UserModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwtToken = require("../token/jwtToken.js");

// Register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists, try to login" });
    }

    user = await User.create({ name, email, password });

    jwtToken(user, 201, res);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Please enter the email & password")
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(
      console.log("Unknown user with the given credentials")
    );
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      console.log("Unknown user with the given credentials")
    );
  }

  jwtToken(user, 201, res);
});

//  Log out user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

//  Get user Details
exports.userDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});


