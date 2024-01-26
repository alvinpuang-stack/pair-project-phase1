"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }

    // Getter method untuk itung umur berdasarkan taun lahir
    getAge() {
      if (this.dateBirth) {
        const today = new Date()
        const birthDate = new Date(this.dateBirth);
        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        return age
      }

      return null // Return null kalau dateBirth belum di set
    }
  }

  UserProfile.init(
    {
      bio: DataTypes.TEXT,
      otherDetails: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      dateBirth: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserProfile",
    }
  );

  return UserProfile;
};
