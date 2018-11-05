'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_game_setting = sequelize.define('User_game_setting', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    max_sale: DataTypes.STRING,
    max_possibleloss: DataTypes.STRING,
    max_ticket_item: DataTypes.STRING,
    max_ticket: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  User_game_setting.associate = function(models) {
    // associations can be defined here
  };
  return User_game_setting;
};