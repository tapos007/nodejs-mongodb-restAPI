var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./mongoose');
var {ObjectID} = require('mongodb');


var {Student} = require('./model/student');

var app = express();
// parse application/json
app.use(bodyParser.json());


app.get('/students', (req, res)=> {
    Student.find().then((students)=> {
        res.send({students})
    }, (e)=> {
        res.status(404).send(e);
    });
});

app.post('/students', (req, res)=> {
    var student = new Student(
        {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        });
    student.save().then((student)=> {
        res.send({student});
    }, (e)=> {
        res.status(404).send(e);
    });

});

app.get('/students/:studentId', (req, res)=> {
    var id = req.params.studentId;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send("id is not valid");
    }
    Student.findById(id).then((students)=> {
        if (!students) {
            return res.status(404).send("no data found");
        }
        res.send({students})
    }).catch((e)=> {
        res.status(404).send(e);
    });
});
app.put('/students/:studentId', (req, res)=> {
    res.send("get a single student update  method call");
});
app.delete('/students/:studentId', (req, res)=> {
    res.send("get a single student delete method call");
});

app.listen(3000, ()=> {
    console.log(`connected successfully in port`);
});