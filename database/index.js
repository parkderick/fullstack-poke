var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'pokedex'
});

connection.connect(err =>  {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to DB')
  }
})

const dbHelpers = {
  getAllPokemon: (req, callback) => {
    connection.query(`SELECT p.id, p.name, p.image_url, t.name AS moves from pokemon p LEFT JOIN types t ON p.type_id=t.id;`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },

  getPokemonByType: (req, callback) => {
    connection.query(`SELECT p.id, p.name, p.type_id, p.image_url, t.name AS moves from pokemon p LEFT OUTER JOIN types t ON t.id=p.type_id where t.name="${req.params.moves}";`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },

  
  postPokemon: (req, callback) => {
    connection.query(`INSERT into pokemon (name, type_id) VALUES ("${req.body.name}", "${req.body.type_id}");`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  deletePokemon: (req, callback) => {
    connection.query(`DELETE from pokemon where id=${req.params.id};`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  },
  updatePokemon: (req, callback) => {
    connection.query(`UPDATE pokemon set name="${req.body.name}", type_id="${req.body.type_id}" where id=${req.params.id};`, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  }
}

module.exports = dbHelpers;