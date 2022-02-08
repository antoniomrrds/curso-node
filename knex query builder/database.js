const knex = require('knex').knex({
    client: 'mysql2',
    connection: {
      host : '10.0.0.138',
      port : 3306,
      user : 'scorpion',
      password : 'Reis23101996',
      database : 'knexjs'
    }
  });

  module.exports = knex