const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");
const fileUpload = require("express-fileupload");



//allows to read in frontend
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded());
app.use(express.urlencoded());
app.use(fileUpload());


require("dotenv").config({
    path:".env"
})


app.use(product);
app.use(user);


module.exports = app