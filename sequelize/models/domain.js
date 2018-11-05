'use strict';
module.exports = (sequelize, DataTypes) => {
  const Domain = sequelize.define('Domain', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    dni: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Domain.associate = function(models) {
  };
  return Domain;
};