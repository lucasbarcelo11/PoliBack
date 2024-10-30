const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
});

module.exports = User;