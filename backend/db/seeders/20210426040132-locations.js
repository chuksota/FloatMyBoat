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
  },
{
  country: 'Turkey',
  city: 'Istanbul',
},
{
country: 'Africa',
state:'Nigeria',
city: 'Enohia Nkalu',
},
{
  country: 'Greece',
  city:"Mykonos",
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
