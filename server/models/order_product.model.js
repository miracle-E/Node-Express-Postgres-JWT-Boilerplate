"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define(
    "OrderProduct",
    {
      order_id: DataTypes.STRING,
      product_id: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  OrderProduct.associate = function (models) {
    // associations can be defined here
  };
  return OrderProduct;
};
