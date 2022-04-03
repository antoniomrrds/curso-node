const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','scorpion','Reis23101996',{
    host:'10.0.0.138',
    dialect:'mysql'
});

module.exports = connection