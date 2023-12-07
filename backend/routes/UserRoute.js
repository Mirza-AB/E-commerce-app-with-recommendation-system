const express = require("express");
const { registerUser, loginUser, logoutUser, userDetails} = require("../controller/UserController");
const { authorisedUser } = require("../middleware/authenticate");
const router = express.Router();

router.route("/signUp").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

router.route("/user").get(authorisedUser, userDetails);

module.exports = router;