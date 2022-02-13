const sequelize = require("../config/sequelize");
const DataTypes = require("sequelize");

const Tag = sequelize.define('Tag', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
},{
  timestamps: false
});

Tag.associate = function(models) {
  Tag.hasMany(models.Card);
}

module.exports = Tag;