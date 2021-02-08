const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0'

const app = express();

app.get('/', (request, response)=> {
    response.send('<h1>Hello World</h1>');
});

app.listen(PORT, HOST);
console.log('App running on:\n'+'HOST: '+HOST+'\n PORT: '+PORT);