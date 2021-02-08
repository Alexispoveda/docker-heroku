const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (request, response)=> {
    response.sendFile('./greetings.html');
});

app.listen(PORT);
console.log('App running on port: '+PORT);