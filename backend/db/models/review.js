'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Listing, {foreignKey: 'listingId'})
  };
  return Review;
};