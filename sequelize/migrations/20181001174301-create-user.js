'use strict';
var DataTypes = require('sequelize/lib/data-types');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      DomainId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'Domains',
          key: 'id'
        }
      },
      UserTypeId: {
        type: Sequelize.UUID,
        references: {
          model: 'User_types',
          key: 'id'
        }
      },
      UserFatherId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'User_types',
          key: 'id'
        }
      },
      first_name: {
        type: Sequelize.STRING(45)
      },
      last_name: {
        type: Sequelize.STRING(45)
      },
      dni: {
        type: Sequelize.STRING(45)
      },
      username: {
        type: Sequelize.STRING(45)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING(45)
      },
      status_email: {
        type: Sequelize.BOOLEAN
      },
      phone: {
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};