const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'C@ique9813', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;