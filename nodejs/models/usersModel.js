const Sequelize = require('sequelize')
const sequelize = require('../config/config')

const Users = sequelize.define('Users',{
    id:{
        type: Sequelize.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname:{
        type: Sequelize.STRING,
        allowNull: true
    },
    lastname:{
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    avatar:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
    },
    dob:{
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    gender:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0
    },
    isAdmin:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'users',
    timestamps: false
});

module.exports = Users