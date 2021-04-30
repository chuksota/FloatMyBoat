'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    price: DataTypes.INTEGER,
    boatType: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    destinationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Listing.associate = function (models) {
    Listing.hasMany(models.Review, {
      foreignKey: 'listingId',
      onDelete: 'cascade',
      hooks: true
    })
    Listing.belongsTo(models.Destination, { foreignKey: 'destinationId' })
    Listing.belongsTo(models.User, { foreignKey: 'userId' })
    Listing.hasMany(models.Booking, { foreignKey: 'listingId' })
  };
  return Listing;
};
