'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        name: 'Show and Tell',
        magicApiId: 'f6aae9ca-023d-525d-aa35-6d3dff3918c2',
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=416878&type=card',
        amount: 2
      },
      {
        name: 'Thoughtseize',
        magicApiId: '8e8097bd-ccd9-5f97-b9c2-0c8ee324accc',
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489782&type=card',
        amount: 4
      }
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cards', null, {});
  }
};
