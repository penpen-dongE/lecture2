var express = require('express');
var app = express();

var router = require('./2-1-main')(app);

app.set('views', __dirname+'/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000,()=>{
    console.log("웹 서버가 실행되었다. http://127.0.0.1:3000 ")
});

