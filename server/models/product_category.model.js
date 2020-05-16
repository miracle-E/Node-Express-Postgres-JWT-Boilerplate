"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      product_id: DataTypes.STRING,
      category_id: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  ProductCategory.associate = function (models) {
    // associations can be defined here
  };
  return ProductCategory;
};
