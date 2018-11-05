'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_phone = sequelize.define('User_phone', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    phone: DataTypes.STRING,
    type: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {});
  User_phone.associate = function(models) {
    
  };
  return User_phone;
};