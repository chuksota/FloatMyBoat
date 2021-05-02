'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Listings', [{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boatType: 'Dingy',
    price: 60,
    destinationId: 1,
    userId: 1,
    numOfGuests: 3,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Dingy+picture.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boatType: 'Speed boat',
    price: 150,
    destinationId: 1,
    userId: 1,
    numOfGuests: 10,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat1.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boatType: 'Yacht',
    price: 300,
    destinationId: 1,
    userId: 1,
    numOfGuests: 100,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht1.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boatType: 'Yacht',
    price: 600,
    destinationId: 1,
    userId: 1,
    numOfGuests: 60,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht2.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    boatType: 'Row Boat',
    price: 35,
    destinationId: 1,
    userId: 1,
    numOfGuests: 2,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat1.jpg'
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

    boatType: 'Row Boat',
    price: 35,
    destinationId: 1,
    userId: 1,
    numOfGuests: 2,
    imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat2.jpg'
  },
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Sail Boat",
  price: 150,
  destinationId: 1,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat3.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Yacht",
  price: 100000,
  destinationId: 1,
  userId: 2,
  numOfGuests: 500,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Luxury-yacht-sales-brokerage-scaled.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Dingy",
  price: 10,
  destinationId: 1,
  userId: 2,
  numOfGuests: 4,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Dingypicture.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Speed boat",
  price: 20,
  destinationId: 1,
  userId: 2,
  numOfGuests: 50,
  imageUrl:'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat17.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Row Boat",
  price: 5,
  destinationId: 1,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat6.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Yacht",
  price: 300,
  destinationId: 1,
  userId: 2,
  numOfGuests: 250,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht3.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Row Boat",
  price: 300,
  destinationId: 1,
  userId: 2,
  numOfGuests: 2,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat10.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',

  boatType: "Row Boat",
  price: 300,
  destinationId: 2,
  price: 50,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat7.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 400,
  boatType: "Yacht",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht12.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 600,
  boatType: "Yacht",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht12.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 150,
  boatType: "Sail Boat",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat20.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 100,
  boatType: "Sail Boat",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat9.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 20,
  boatType: "Dingy",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/dingypicture4.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 250,
  boatType: "Speed Boat",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat16.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 800,
  boatType: "Sail Boat",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat18.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 15,
  boatType: "Row Boat",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat6.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 1000,
  boatType: "Yacht",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht7.jpg'
},
{
  description: 'Curabitur ultricies volutpat nibh',
  price: 10,
  boatType: "Dingy",
  destinationId: 2,
  userId: 2,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/Dingypicture.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 600,
  boatType: "Yacht",
  destinationId: 3,
  userId: 3,
  numOfGuests: 15,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht16.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 350,
  boatType: "Yacht",
  destinationId: 3,
  userId: 3,
  numOfGuests: 250,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht18.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 75,
  boatType: "Sail Boat",
  destinationId: 3,
  userId: 3,
  numOfGuests: 10,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat16.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 75,
  boatType: "Sail Boat",
  destinationId: 3,
  userId: 3,
  numOfGuests: 7,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat22.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 125,
  boatType: "Sail Boat",
  destinationId: 3,
  userId: 3,
  numOfGuests: 8,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat22.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 15,
  boatType: "Row Boat",
  destinationId: 3,
  userId: 3,
  numOfGuests: 15,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat8.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 115,
  boatType: "Speed Boat",
  destinationId: 3,
  userId: 3,
  numOfGuests: 15,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat13.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 700,
  boatType: "Speed Boat",
  destinationId: 3,
  userId: 3,
  numOfGuests: 30,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat14.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 1500,
  boatType: "Yacht",
  destinationId: 3,
  userId: 3,
  numOfGuests: 300,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht4.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 200,
  boatType: "Row Boat",
  destinationId: 3,
  userId: 3,
  numOfGuests: 35,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat11.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 100,
  boatType: "Row Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 7,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat9.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 6000,
  boatType: "Yacht",
  destinationId: 4,
  userId: 3,
  numOfGuests: 1000,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht20.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 100,
  boatType: "Sail Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 50,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat21.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 35,
  boatType: "Row Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 2,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/rowboat4.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 1500,
  boatType: "Yacht",
  destinationId: 4,
  userId: 3,
  numOfGuests: 600,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/yacht17.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 1500,
  boatType: "Speed Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 600,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat12.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 200,
  boatType: "Sail Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 17,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat11.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 200,
  boatType: "Sail Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 17,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/sailboat8.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 200,
  boatType: "Speed Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 25,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat15.jpg'
},
{
  description: 'Vestibulum est ipsum, sagittis ac nisl sit amet, tempus malesuada nisl.',
  price: 200,
  boatType: "Speed Boat",
  destinationId: 4,
  userId: 3,
  numOfGuests: 25,
  imageUrl: 'https://floatyourboatimages.s3.us-east-2.amazonaws.com/speedboat5.jpg'
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
