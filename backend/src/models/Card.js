const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Card = sequelize.define('Card', {
    texto: {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_criacao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    data_modificacao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    tags: {
        type: DataTypes.STRING,
    },
}, {
    // timestamps: false
});

Card.associate = function(models) {
    Card.belongsTo(models.Tag, { });
}

module.exports = Card;