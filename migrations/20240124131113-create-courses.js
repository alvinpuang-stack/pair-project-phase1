"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title cannot be null",
          },
          notEmpty: {
            msg: "Title cannot be empty",
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description cannot be null",
          },
          notEmpty: {
            msg: "Description cannot be empty",
          },
        },
      },
      instructor: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Instructor cannot be null",
          },
          notEmpty: {
            msg: "Instructor cannot be empty",
          },
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        validate: {
          notNull: {
            msg: "Category ID cannot be null",
          },
          isInt: {
            msg: "harus berupa integer",
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Courses");
  },
};
