const Sequelize = require('sequelize');
const sequelize = require('../config/config');

const Products = sequelize.define('Products', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
},
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    image:{
        type: Sequelize.STRING,
    },
    description:{
        type: Sequelize.STRING,
    },
    quantity:{
        type: Sequelize.NUMBER,
    },
    type_id:{
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: '3'
    },
    brand_id:{
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: '10'
    },
    gender:{
        type: Sequelize.BOOLEAN,
        defaultValue: '1'
    }
},{
    tableName: 'products',
    timestamps: false
})

module.exports = Products