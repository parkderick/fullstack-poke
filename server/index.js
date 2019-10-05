var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var pokemon = require('./helperfunctions/pokemon.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/../client/dist'));



app.get('/api/pokemon', function (req, res) {
  var response = {};
  db.getAllPokemon((err, results) => {
    if (err) {
      console.error(err);
      res.status(404).send('error getting pokemon')
    } else {
      response.idSort = results;
      response.typeSort = pokemon.sortByType(results);
      res.status(200).send(response)
    }
  })
});

app.get('/api/pokemon/:id/type', function (req, res) {
  db.getTypeOfPokemon(req.params.id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(404).send('error getting type of pokemon at id ' + req.params.id);
    } else {
      res.status(200).send(result);
    }
  })
})



app.listen(3000, function () {
  console.log('listening on port 3000!');
});

