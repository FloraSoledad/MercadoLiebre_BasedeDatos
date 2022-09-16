'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addres = sequelize.define('Addres', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {});
  Addres.associate = function(models) {
    // associations can be defined here
  };
  return Addres;
};