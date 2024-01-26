"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Courses", "duration", {
      type: Sequelize.INTEGER,
      allowNull: true, // Set to false if the column should not allow NULL values
      validate: {
        isInt: {
          msg: "Duration should be a Number",
        },
        notNull: {
          msg: "Duration is required",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Courses", "duration");
  },
};
