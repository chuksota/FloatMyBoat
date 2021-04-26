'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boatType: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING(100),
        unique:true,
        allowNull: false
        },
      destinationId: {
        type: Sequelize.INTEGER,
        references: {model: 'Destinations'},
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'},
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};
