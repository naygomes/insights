const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Card = sequelize.define('Card', {
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
    tag: {
        type: DataTypes.STRING,
    }, 
}, {
    createdAt: 'data_criacao',
    updatedAt: 'data_modificacao',
});

Card.associate = function(models) {
    Card.belongsTo(models.Tag, { });
}

module.exports = Card;