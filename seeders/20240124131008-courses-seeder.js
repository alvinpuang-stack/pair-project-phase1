"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const healthCategoryId = await queryInterface.rawSelect(
      "Categories",
      {
        where: {
          name: "Health",
        },
      },
      ["id"]
    );
    const scienceCategoryId = await queryInterface.rawSelect(
      "Categories",
      {
        where: {
          name: "Science",
        },
      },
      ["id"]
    );

    await queryInterface.bulkInsert(
      "Courses",
      [
        {
          title: "Blood & Lymphoreticular Systems",
          description: " The lymphocyte covers a continuous range of cells from a small resting reserve cell through a slightly larger dividing cell to a large cell possessing the structural apparatus required for further maturation.",
          instructor: "John Doe",
          duration: 12,
          categoryId: scienceCategoryId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          duration: 15,
          title: "Cardiovascular System",
          description: "The cardiovascular system consists of the heart, arteries, veins, and capillaries.",
          instructor: "Jane Smith",
          categoryId: scienceCategoryId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          duration: 1,
          title: "Vegan Diets – Benefits and Dangers",
          description: "several studies have shown that a vegan diet (VD) decreases the risk of cardiometabolic diseases.",
          instructor: "Natasya P.S",
          categoryId: healthCategoryId,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
