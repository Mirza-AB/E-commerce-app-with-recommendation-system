const app = require("./app");
const db = require("./db/database");

//home
app.get('/', function(req,res){
    res.send("Welcome");
})

//server connection to the port 3500
app.listen(3500,()=>{
    console.log("Server running")
})