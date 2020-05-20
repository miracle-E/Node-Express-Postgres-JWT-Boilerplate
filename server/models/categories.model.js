"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "Categories",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      category_id: DataTypes.UUID,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  Categories.associate = function (models) {
    // associations can be defined here
  };
  return Categories;
};
