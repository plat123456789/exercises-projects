let http = require("http");
let fs = require("fs");
let path = require("path");
let express = require("express");

let app = express();

app.use("/", express.static(__dirname));

app.use("/", express.static(__dirname+"/css"));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(3000);

console.log("Running at Port 3000")


