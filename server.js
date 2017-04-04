var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./mongoose');


var {Student} = require('./model/student');

var app = express();
// parse application/json
app.use(bodyParser.json());


app.get('/students',(req,res)=>{
   res.send("get all method call");
});

app.post('/students',(req,res)=>{
    var student = new Student(
        {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        });
    student.save().then((student)=>{
        res.send({student});
    },(e)=>{
        res.status(404).send(e);
    });

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