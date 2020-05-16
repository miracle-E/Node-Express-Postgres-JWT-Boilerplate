"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      label: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  Role.associate = function (models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through: "UserRole",
      as: "users",
      foreignKey: "user_id",
    });
  };
  return Role;
};
