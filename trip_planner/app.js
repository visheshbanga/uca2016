var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static'));

app.get('/test', function(req, res){
  console.log("In method test");
  res.end("hurray!! trip_planner is working")
});

<<<<<<< HEADvar server = app.listen(8081)
=======
var server = app.listen(8081)
>>>>>>> f9cfb787acaf9808dc863333c6f0e24c2047db90
