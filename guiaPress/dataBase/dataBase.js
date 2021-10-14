const  Sequelize =require('sequelize');

const connection = new Sequelize('guiapress','scorpion','Reis23101996',{
    host:'10.0.0.138',
    dialect:'mysql'
});

module.exports = connection;