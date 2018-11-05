'use strict';
module.exports = (sequelize, DataTypes) => {
  const Taxe = sequelize.define('Taxe', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    porcent: DataTypes.STRING
  }, {});
  Taxe.associate = function(models) {
    // associations can be defined here
  };
  return Taxe;
};