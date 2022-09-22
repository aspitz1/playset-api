'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Show and Tell',
        magicApiId: '2523534e-335d-5c44-a403-f95b998ae394',
        amount: 2
      },
      {
        name: 'Thoughtseize',
        magicApiId: '8e8097bd-ccd9-5f97-b9c2-0c8ee324accc',
        amount: 4
      }
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cards', null, {});
  }
};
