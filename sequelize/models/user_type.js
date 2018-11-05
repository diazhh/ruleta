'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_type = sequelize.define('User_type', {
    
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  User_type.associate = function(models) {
  };
  return User_type;
};