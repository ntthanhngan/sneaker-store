const Sequilize = require('sequelize');

const sequilize = new Sequilize('sneakerstore', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequilize;