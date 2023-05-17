'use strict';

const express= require ('express');
const cors = require ('cors');


const app = express();

app.use(cors());
app.use(express.json());



app.get('/', (request, response, next) => {
    response.status(200).send('Helloo World');
});

app.get('/heyPath/:name', (request, response, next) => {
    console.log('Here it is', request.query);
    response.status(200).send('WE LIVE');
});



