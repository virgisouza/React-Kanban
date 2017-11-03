'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [
    {
      username: 'Ricky',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Kevin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Kayley',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});

  }
};
