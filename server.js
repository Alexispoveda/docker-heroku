const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (request, response)=> {
    response.send('<h1>Hello World</h1>');
});

app.listen(PORT);
console.log('App running on port: '+PORT);