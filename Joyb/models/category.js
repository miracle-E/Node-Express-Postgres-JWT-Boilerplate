'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    label: DataTypes.STRING
  }, {
  });
  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsToMany(models.Product, {
      through: 'ProductCategory',
      as: 'products',
      foreignKey: 'product_id'
    });
  }
  return Category;
};