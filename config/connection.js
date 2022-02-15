// import Sequalize constructor
const Sequalize = require('sequalize');

// create database connection
const sequalize = new Sequalize('tech_blog_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequalize;