const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.util');

const User = sequelize.define('User', {     
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 255]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            len: [5, 255]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 1024]
        }
    }
}, {
    timestamps: true
});

module.exports = User;
