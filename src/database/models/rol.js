'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    name: DataTypes.STRING
  }, {});
  Rol.associate = function(models) {
    // associations can be defined here
  };
  return Rol;
};