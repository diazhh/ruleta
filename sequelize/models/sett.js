'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sett = sequelize.define('Sett', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    status: DataTypes.BOOLEAN,
    game_id: DataTypes.INTEGER
  }, {});
  Sett.associate = function(models) {
  };
  return Set;
};