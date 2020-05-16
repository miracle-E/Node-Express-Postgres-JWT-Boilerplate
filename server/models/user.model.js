"use strict";
/**
 * User Schema
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    status: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Order);
    // User.belongsToMany(models.Role, {
    //   through: "UserRoles",
    //   as: "roles",
    //   foreignKey: "user_id",
    // });
  };

  return User;
};
