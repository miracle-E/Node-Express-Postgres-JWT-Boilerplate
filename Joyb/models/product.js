'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    is_available: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    like: DataTypes.INTEGER
  }, {
    underscored: true
  });
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Category, {
      through: 'ProductCategory',
      as: 'categories',
      foreignKey: 'product_id'
    });
    Product.belongsToMany(models.Order, {
      through: 'OrderProduct',
      as: 'orders',
      foreignKey: 'product_id'
    });
  };
  return Product;
};