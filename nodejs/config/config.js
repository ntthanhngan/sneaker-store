const Sequilize = require('sequelize');

const sequilize = new Sequilize('sneakerstore', 'root', '',{
    host: '0.0.0.0',
    dialect: 'mysql'
})

module.exports = sequilize;