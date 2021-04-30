'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    author: DataTypes.STRING,
    review: DataTypes.STRING(3000),
    listingId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Listing, {foreignKey: 'listingId'})
  };
  return Review;
};
