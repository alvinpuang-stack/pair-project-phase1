"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     */
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash("rahasia", salt)
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "John Doe",
          email: "admin@gmail.com",
          password: hash,
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user",
          email: "user@gmail.com",
          password: hash,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
