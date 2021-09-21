const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','reis2310',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection