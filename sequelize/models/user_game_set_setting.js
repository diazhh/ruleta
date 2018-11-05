'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_game_set_setting = sequelize.define('User_game_set_setting', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    set_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    status: DataTypes.BOOLEAN
  }, {});
  User_game_set_setting.associate = function(models) {
  };
  return User_game_set_setting;
};