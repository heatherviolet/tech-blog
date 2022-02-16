// import Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

// create database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    password: '',
    port: 3306,
    
});

module.exports = sequelize;