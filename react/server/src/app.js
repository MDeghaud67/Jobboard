const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { notFound, errorHandler} = require('./middlewares');

require('dotenv').config();


const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;