const sequelize = require("../config/sequelize");
const DataTypes = require("sequelize");

const Tag = sequelize.define('Tag', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
},{
  timestamps: false
});

Tag.associate = function(models) {
  Tag.belongsToMany(models.Card, {through: 'CardTag', as: 'cards', foreignKey: 'tagId'});
}

module.exports = Tag;