//Seeders are used to populate the db, built in feature of sequelize
'use strict';



const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        DomainId: null,
        UserTypeId: '7d0ec5af-b137-4ebd-8f27-e0745cfa258f',
        UserFatherId: null,
        first_name: 'Hector',
        last_name: 'Diaz',
        dni: 'v16375918',
        username: 'diazhh',
        password:'$2b$10$Jwkk0BOgVp6tjkaoN6sXOuWkM0J9bj6xAJwWapv92RvN4OGO8POb2', //hash of test@123
        email:'diazhh@gmail.com',
        status_email:false,
        phone:'',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
