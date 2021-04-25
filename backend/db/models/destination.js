'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  Destination.associate = function(models) {
   Destination.hasMany(models.Listing, {foreignKey: 'destinationId'})
  };
  return Destination;
};
