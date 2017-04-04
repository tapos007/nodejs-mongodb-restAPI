var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./mongoose');

var app = express();
// parse application/json
app.use(bodyParser.json());


app.get('/students',(req,res)=>{
   res.send("get all method call");
});

app.post('/students',(req,res)=>{
    res.send("post method  call");
});

app.get('/students/:studentId',(req,res)=>{
    res.send("get a single student  method call");
});
app.put('/students/:studentId',(req,res)=>{
    res.send("get a single student update  method call");
});
app.delete('/students/:studentId',(req,res)=>{
    res.send("get a single student delete method call");
});

app.listen(3000,()=>{
    console.log(`connected successfully in port`);
});