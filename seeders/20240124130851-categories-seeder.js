'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Health',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Science',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Tambahkan data kategori lain jika diperlukan
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
