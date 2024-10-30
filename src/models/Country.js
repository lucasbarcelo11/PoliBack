const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const Country = sequelize.define('country', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lenguaje: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

module.exports = Country;