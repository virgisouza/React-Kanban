'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('cards', [
      {
        title: 'Bacon',
        createdAt: new Date(),
        updatedAt: new Date(),
        assigned_to: 1,
        created_by: 2,
        priorities_id: 3,
        status_id: 1
      },
      {
        title: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date(),
        assigned_to: 1,
        created_by: 3,
        priorities_id: 2,
        status_id: 1
      },
      {
        title: 'Eggs',
        createdAt: new Date(),
        updatedAt: new Date(),
        assigned_to: 2,
        created_by: 2,
        priorities_id: 2,
        status_id: 1
      },
      {
        title: 'Twix',
        createdAt: new Date(),
        updatedAt: new Date(),
        assigned_to: 1,
        created_by: 3,
        priorities_id: 3,
        status_id: 3
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {});
  }
};
