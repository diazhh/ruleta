'use strict';
module.exports = (sequelize, DataTypes) => {
  const Domain_taxe = sequelize.define('Domain_taxe', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    domain_id: DataTypes.INTEGER,
    tax_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  Domain_taxe.associate = function(models) {
    // associations can be defined here
  };
  return Domain_taxe;
};