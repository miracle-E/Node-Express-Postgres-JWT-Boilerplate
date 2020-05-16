"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    "UserRole",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: DataTypes.UUID,
      role_id: DataTypes.UUID,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  // UserRole.associate = function (models) {
  //   // associations
  //   UserRole.belongsTo(models.User, {
  //     foreignKey: {
  //       name: "user_id",
  //       as: "user",
  //     },
  //   });
  //   UserRole.belongsTo(models.Role, {
  //     foreignKey: {
  //       name: "role_id",
  //       as: "role",
  //     },
  //   });
  // };
  return UserRole;
};
