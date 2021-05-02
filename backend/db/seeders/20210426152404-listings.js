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
    userId: 1,
    numOfGuests: 3,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Dingy+picture.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    address: '9 Tanglewood Dr.',
    boatType: 'Speed boat',
    price: 150,
    destinationId: 1,
    userId: 1,
    numOfGuests: 10,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat1.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    address: '8547 Wood St.',
    boatType: 'Yacht',
    price: 300,
    destinationId: 1,
    userId: 1,
    numOfGuests: 100,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht1.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    address: '2 Ann Drive',
    boatType: 'Yacht',
    price: 600,
    destinationId: 1,
    userId: 1,
    numOfGuests: 60,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht2.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    address: '8404 San Pablo Street',
    boatType: 'Row Boat',
    price: 35,
    destinationId: 1,
    userId: 1,
    numOfGuests: 2,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat1.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    address: '117 West La Sierra St.',
    boatType: 'Row Boat',
    price: 35,
    destinationId: 1,
    userId: 1,
    numOfGuests: 2,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat2.jpg'
  },
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '555 Smith Ave',
  boatType: "Sail Boat",
  price: 150,
  destinationId: 1,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat3.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '441 6th Street',
  boatType: "Yacht",
  price: 100000,
  destinationId: 1,
  userId: 2,
  numOfGuests: 500,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Luxury-yacht-sales-brokerage-scaled.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '97 North Bowman Ave.',
  boatType: "Dingy",
  price: 10,
  destinationId: 1,
  userId: 2,
  numOfGuests: 4,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Dingypicture.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '9058 East Linda St',
  boatType: "Speed boat",
  price: 20,
  destinationId: 1,
  userId: 2,
  numOfGuests: 50,
  imageUrl:'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat17.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '542 Hillcrest Street',
  boatType: "Row Boat",
  price: 5,
  destinationId: 1,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat6.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '8109 Prairie Lane',
  boatType: "Yacht",
  price: 300,
  destinationId: 1,
  userId: 2,
  numOfGuests: 250,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht3.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '944 SE. Saxton Dr.',
  boatType: "Row Boat",
  price: 300,
  destinationId: 1,
  userId: 2,
  numOfGuests: 2,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat10.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  address: '83 Addison Circle.',
  boatType: "Row Boat",
  price: 300,
  destinationId: 2,
  userId: 2
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  address: '298 Victoria St.',
  price: 350,
  boatType: "Yacht",
  destinationId: 3,
  userId: 3
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  address: '678 Main Street',
  price: 200,
  boatType: "Row Boat",
  destinationId: 3,
  userId: 3
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  address: '7836 Rockaway Drive',
  price: 100,
  boatType: "Row Boat",
  destinationId: 4,
  userId: 3
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  address: '26 Green Hill Court',
  price: 100,
  boatType: "Row Boat",
  destinationId: 4,
  userId: 3
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  address: '8321 Tarkiln Hill Ave.',
  price: 100,
  boatType: "Row Boat",
  destinationId: 4,
  userId: 3
},
], {});
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
