const mongoose = require("mongoose");

const mong_url = 'mongodb://localhost:27017/E-commerce'

mongoose.connect(mong_url,{useUnifiedTopology:true,useNewUrlParser:true})
const db = mongoose.connection;

db.on('error', function(err){
    console.log('Error occured' + err)
})

db.on('connected', function(){
    console.log('Database connected successfylly to ' + mong_url)
})

module.exports = db