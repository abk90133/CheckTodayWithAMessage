//jsversion6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  var today = new Date();
  var currentday = today.getDay();

  if(currentday==6 || currentday==0){
    res.send("<h1>Yay! It's Weekend</h1>");
    }else{
    res.sendFile(__dirname + "/index.html");
    }
});



app.listen(3201, function(){
  console.log("Server started on port 3201");
});
