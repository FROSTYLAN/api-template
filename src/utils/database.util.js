const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
    dialect: 'postgres',
    logging: false, // Puedes habilitar esto para ver las consultas SQL en la consola
});

module.exports = sequelize;
