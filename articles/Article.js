const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // UMA Categoria tem muitos artigos
Article.belongsTo(Category); // Um artigo pertence a uma categoria

// Article.sync({force: true}) // Metodo para criar a tabla no banco com o relacionamentors

module.exports = Article;