const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


