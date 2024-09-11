const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.util');

const Machine = sequelize.define('Machine', {
  maquinariaId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Machine;
