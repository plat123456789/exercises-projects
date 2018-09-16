let express = require("express");
let http = require('http');
let path = require("path");
let fs = require("fs");
let formidable = require("formidable");
let serveIndex = require('serve-index');
let mcache = require("memory-cache");

let app = express();

let cache = (duration)=>{
    return (req,res,next)=>{
        let key = "__express__" + req.originalUrl || req.originalUrl
        let cachedBody = mcache.get(key)
        if(cachedBody){
            res.send(cachedBody)
            return
        }
        else{
            res.senResponse = res.send
            res.send = (body) =>{
                mcache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

app.use('/download',express.static(path.join(__dirname, '/uploads')), serveIndex(path.join(__dirname, '/uploads'), {'icons': true}))


app.get("/",cache(10),function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    let form = new formidable.IncomingForm();

    form.parse(req);

    form.on("fileBegin", function(name, file){
        file.path = __dirname + "/uploads/" + file.name;
    });
    form.on("file",function(name,file){
        console.log("Uploaded "+ file.name);
    });
    res.sendFile(__dirname+"/index.html")
})




app.listen(3000);