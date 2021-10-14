const Sequelize = require("sequelize")

const Category = require('../categories/Category')
const connection = require('../database/dataBase')


const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    },
})
//Relacionamento 1 para muitos
Category.hasMany(Article); // varios artigos para uma categoria
//Relacionamento 1 para 1
Article.belongsTo(Category) // Um artigo pertence a uma categoria



module.exports = Article;