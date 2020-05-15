'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    amount: DataTypes.INTEGER,
    date_created: DataTypes.DATE,
    confirmation_number: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
    cart_id: DataTypes.STRING
  }, {
    underscored: true
  });
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsToMany(models.Product, {
      through: 'OrderProduct',
      as: 'products',
      foreignKey: 'product_id'
    });
    Order.belongsTo(models.Cart, {
      foreignKey: {
        name: 'cart_id',
        as: 'cart',
      }
    });
    Order.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        as: 'user',
      }
    });
  }
  return Order;
};