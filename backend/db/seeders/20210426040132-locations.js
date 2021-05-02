'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Destinations', [
     {
    country: 'United States',
    state: 'New York',
    city: 'New York City',
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/NewYorkLocationCard.jpg'
  },
{
  country: 'Turkey',
  city: 'Istanbul',
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Instanbul.jpg'
},
{
country: 'Africa',
state:'Nigeria',
city: 'Enohia Nkalu',
imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Africa.jpg'
},
{
  country: 'Greece',
  city:"Mykonos",
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Mykonos+locationCard.jpg'
}], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Destinations', null, {});
  }
};
