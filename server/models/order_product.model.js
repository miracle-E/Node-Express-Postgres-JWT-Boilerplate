"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define(
    "OrderProduct",
    {
      order_id: DataTypes.UUID,
      product_id: DataTypes.UUID,
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
