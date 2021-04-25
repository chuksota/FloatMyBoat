'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    description: DataTypes.STRING,
    listingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    bookingDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Listing, {foreignKey: 'listingId'})
    Booking.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Booking;
};
