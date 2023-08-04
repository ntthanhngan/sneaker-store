const Sequilize = require('sequelize');

const sequilize = new Sequilize('sneakerstore', 'root', '',{
    host: '127.0.0.1',
    dialect: 'mysql'
})

module.exports = sequilize;