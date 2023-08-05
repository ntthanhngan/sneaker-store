const Sequilize = require('sequelize');

const sequilize = new Sequilize('sneakerstore', 'root', '',{
    host: '::1',
    dialect: 'mysql'
})

module.exports = sequilize;