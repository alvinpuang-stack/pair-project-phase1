"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Enrollments", "status", {
      type: Sequelize.INTEGER,
      defaultValue: 0, // Nilai default jika tidak diisi
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Enrollments", "status");
  },
};
