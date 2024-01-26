"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      // define association here
      Course.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      Course.hasMany(models.Enrollment, {
        foreignKey: "course_id",
        onDelete: "CASCADE",
      });
    }
  }
  Course.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title Can't Be Empty",
          },
          notEmpty: {
            msg: "Title Can't Be Empty",
          },
        },
      },
      description: {
        allowNull: false,

        type: DataTypes.TEXT,
        validate: {
          notNull: {
            msg: "description cannot be null",
          },
          notEmpty: {
            msg: "description cannot be empty",
          },
          isAtLeastTenWords(value) {
            const words = value.split(/\s+/); // Memisahkan teks menjadi kata-kata
            if (words.length < 10) {
              throw new Error("Description Must Be At Least 10 Words Long");
            }
          },
        },
      },
      categoryId: {
        allowNull: false,

        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Category Can't Be Empty",
          },
          isInt: {
            msg: "Category Must Be an Id",
          },
        },
      },
      instructor: {
        allowNull: false,

        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Instuctor Can't Be Empty",
          },
          notEmpty: {
            msg: "Instuctor Can't Be Empty",
          },
        },
      },
      duration: {
        allowNull: false,

        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Duration Can't Be Empty",
          },
          isInt: {
            msg: "Duration Can't Be Empty",
          },
          min: {
            args: [1],
            msg: "Duration must be at least 1 Hour",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
