const Sequelize = require('sequelize')
const connection = require('../database/database')

const Games = connection.define('games', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

Games.sync({ force: false })
    .then(_ => console.log('Tabela de Games Foi Criada !!!'))
    .catch(err => console.log('Ops ocorreu um erro !!!: '+ err))

module.exports = Games