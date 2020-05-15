'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_category = sequelize.define('Product_category', {
    product_id: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {});
  Product_category.associate = function(models) {
    // associations can be defined here
  };
  return Product_category;
};