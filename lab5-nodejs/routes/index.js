const express = require('express');
const route = express.Router();

// static data (array)
const messages = [
 {
   id: 1,
   user: "Pikachu",
   message: "Hello"
 },
 {
   id: 2,
   user: "Ash",
   message: "Goodbye"
 },
 {
   id: 3,
   user: "Misty",
   message: "Well hello again"
 }
];


// ga naar pagina => POSTMAN: localhost:3000/
route.get('/', function(request, response, next) {

  // Render express index pagina
  response.render('index', { title: 'Lab 5' });
  response.end();
});



// GET: alles
// => POSTMAN: localhost:3000/api/v1/messages
// => POSTMAN: localhost:3000/api/v1/messages?user=Ash
route.get('/api/v1/messages', (request, response) => {

  if (!request.query.user) {
      response.json({status:"success",message: "GETTING all messages, count "+ messages.length +" messages"});
      // Show the data (option)
      // response.send(messages);
      // or use
      // response.json(messages);
  }
  else {
      response.json({"message" : "GETTING message with username "+ request.query.user});
  }
});


module.exports = route;
console.log('Server is running on port', 3000);
