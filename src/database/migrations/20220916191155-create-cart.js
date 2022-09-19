'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Orders'
          },
          key :'id'
        }
      },
      productID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Products'
          },
          key :'id'
        }
      },
      /* Cuando se crea el registro createdAt*/
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      /* Cuando el registro sufre actualizaciones updateAt */
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      /* Cuando el registro es borrado deledAt */
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Carts');
  }
}; 