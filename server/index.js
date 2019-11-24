var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/pokemon', (req, res) => {
  db.getAllPokemon(req, (err, result) => {
    if (err) {
      console.log(err)
      res.status(404).send('ERROR')
    } else {
      console.log(result)
      res.status(200).send(result)
    }
  })
});

app.post('/api/pokemon', (req, res) => {
  db.postPokemon(req, (err, result) => {
    if (err) {
      res.status(404).send('ERROR POSTING')
    } else {
      res.status(200).send('SUCCESS POSTING')
    }
  })
});

app.delete('/api/pokemon/:id', (req, res) => {
  db.deletePokemon(req, (err, result) => {
    if (err) {
      res.status(404).send('ERROR DELETING')
    } else {
      res.status(200).send('SUCCESS DELETING')
    }
  })
});

app.put('/api/pokemon/:id', (req, res) => {
  db.updatePokemon(req, (err, result) => {
    if (err) {
      res.status(404).send('ERROR UPDATING')
    } else {
      res.status(200).send('SUCCESS UPDATING')
    }
  })
});

app.get('/api/pokemon/:moves', (req, res) => {
  db.getPokemonByType(req, (err, result) => {
    if (err) {
      res.status(404).send('ERROR READING')
    } else {
      res.status(200).send(result)
    }
  })
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

