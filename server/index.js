var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/../client/dist'));



app.get('/api/pokemon', function (req, res) {

});



app.listen(3000, function () {
  console.log('listening on port 3000!');
});

