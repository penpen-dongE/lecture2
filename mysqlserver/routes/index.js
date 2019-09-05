var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',  
    password : '1234',
    database : 'test',
});
db.connect();

//정보를 받아옴
router.get('/data',(req, res)=>{
    var sql = 'SELECT * FROM dog';
    db.query(sql, (err, result)=>{
        if(err) {
            throw err
        };

        console.log(result);
        res.send(result);
    });
});

//post 메소드는 정보를 던져서 create 등을 시킴 
router.post('/data', (req, res)=>{
    console.log(req.body);
    var data = {name : req.body.name , age: req.body.age};
    var sql = 'INSERT INTO dog SET ?';
    db.query(sql, data, (err, result)=>{
        if(err) {
            throw err
        };
        console.log(result);
        res.send({
            status: "data input",
            no:null,
            name: req.body.name,
            age : req.body.age
            
        });
    });
});


module.exports = router;