const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
var route = require('./routes')

app.set('views', __dirname+'/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
//미들웨어 등록 
app.use('/static', express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use('cors');

app.listen(3000, ()=>{
    console.log("서버가 3000 포트에서 실행되었습니다. http://localhost:3000 ");

})

