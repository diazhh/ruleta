'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    
  };
  return Game;
};