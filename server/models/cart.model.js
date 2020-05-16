"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      count: DataTypes.INTEGER,
      total_amount: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  Cart.associate = function (models) {
    // associations can be defined here
    Cart.hasMany(models.Order, {
      foreignKey: "cart_id",
    });
  };
  return Cart;
};
