'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    game_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL
  }, {});
  Item.associate = function(models) {
  };
  return Item;
};