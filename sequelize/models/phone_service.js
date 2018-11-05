'use strict';
module.exports = (sequelize, DataTypes) => {
  const Phone_service = sequelize.define('Phone_service', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    type: DataTypes.STRING,
    token: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    user_phone_id: DataTypes.INTEGER
  }, {});
  Phone_service.associate = function(models) {
  };
  return Phone_service;
};