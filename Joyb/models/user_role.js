'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_role = sequelize.define('User_role', {
    user_id: DataTypes.STRING,
    role_id: DataTypes.STRING
  }, {});
  User_role.associate = function(models) {
    // associations can be defined here
  };
  return User_role;
};