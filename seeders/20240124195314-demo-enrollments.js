"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const courseId = await queryInterface.rawSelect(
      "Courses",
      {
        where: {
          title: "Cardiovascular System",
        },
      },
      ["id"]
    );

    const userId = await queryInterface.rawSelect(
      "Users",
      {
        where: {
          email: "user@gmail.com",
        },
      },
      ["id"]
    );

    const enrollmentsData = [
      {
        id : "TR"+new Date().getTime(),
        user_id: userId,
        course_id: courseId,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Enrollments", enrollmentsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Enrollments", null, {});
  },
};
