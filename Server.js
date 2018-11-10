var express = require('express')
var bodyParser=require('body-parser')


var app =express();
app.use(bodyParser.json());
app.use(express.static('./static'));

app.set('view engine', 'ejs');

var vl=["Gagan","Oberoi"];
var ln = [];

app.get('/home', function(req,res){
  res.render('index', {data:[vl,ln]});
})

app.post('/home', function(req,res){
  var newdata={};
  newdata.name = req.body.name;
  vl[vl.length]=req.body.name;
  res.send(newdata);
})

app.get('/home/length', function(req,res){
  ln=vl.map(function(vl){
    return vl
  })
  res.send(ln)
})

app.listen(3000);
console.log('ok');
