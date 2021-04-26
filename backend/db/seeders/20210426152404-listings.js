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
   return queryInterface.bulkInsert('Listings', [{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    address: '265 Sesame Street',
    boatType: 'Dingy',
    price: 60,
    destinationId: 1,
    userId: 1
  },
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '555 Smith Ave',
  boatType: "Sail Boat",
  price: 150,
  destinationId: 2,
  userId: 2
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  address: '678 Main Street',
  price: 200,
  boatType: "Yacht",
  destinationId: 3,
  userId: 3
}], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Listings', null, {});
  }
};
