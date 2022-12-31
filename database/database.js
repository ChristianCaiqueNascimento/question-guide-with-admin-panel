const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'caique9813', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;