'use strict';
module.exports = (sequelize, DataTypes) => {
  const Social = sequelize.define('Social', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  Social.associate = function (models) {
    // associations can be defined here
  };
  return Social;
};