const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Card = sequelize.define('Card', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    texto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_criacao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    data_modificacao: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    createdAt: 'data_criacao',
    updatedAt: 'data_modificacao',
});

Card.associate = function(models) {
    Card.belongsToMany(models.Tag, {through: 'CardTag', as: 'tags', foreignKey: 'cardId'});
}

module.exports = Card;