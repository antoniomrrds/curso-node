var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '10.0.0.138',
      user : 'scorpion',
      password : 'Reis23101996',
      database : 'apiusers'
    }
  });

module.exports = knex