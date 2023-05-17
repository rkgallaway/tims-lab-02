'use strict';

const express= require ('express');
const cors = require ('cors');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger')


const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(validator);


app.get('/', (request, response, next) => {
    response.status(200).send('Helloo World');
});


app.get('/person/:name', validator, (request, response, next) => {
    console.log('Here it is', request.query);
    const name = request.query.name;
    if(!name) {
    response.status(500).send('Name Needed!');
} else {
    response.status(200).json({name});
    console.log('We got a name!', request.query.name);
});




app.use('*', notFound);
app.use(errorHandler);


const start = (port) => app.listen(port, () => console.log('Port listening is:', port));


module.exports = { start, app }

