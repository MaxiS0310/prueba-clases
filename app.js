const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")))

app.listen(3002, () =>{
    console.log("Server 3002 on")
})

app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});