const Sequilize = require('sequelize');

const sequilize = new Sequilize('sneakerstore', 'root', '',{
    host: 'sneaker-store-api.onrender.com/',
    dialect: 'mysql'
})

module.exports = sequilize;

/* const mysql = require('mysql')

const connectDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sneakerstore'
})

module.exports = connectDb */
