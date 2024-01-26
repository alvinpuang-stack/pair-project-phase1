"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Username is Required",
          },
          notEmpty: {
            msg: "Username is Required",
          },
        },
      },
      email: {
        allowNull: false,

        type: DataTypes.STRING,
        unique: {
          msg: "Email Has Been Used",
        },
        validate: {
          notNull: {
            msg: "Email is Required",
          },
          notEmpty: {
            msg: "Email is Required",
          },
          isEmail: {
            msg: "Wrong Email Format",
          },
          
        },
      },
      password: {
        allowNull: false,

        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Password is Required",
          },
          notEmpty: {
            msg: "Password is Required",
          },
        },
      },
      role: {
        allowNull: false,

        type: DataTypes.ENUM("admin", "user"),
        validate: {
          notNull: {
            msg: "Role is Required",
          },
          notEmpty: {
            msg: "Role is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
