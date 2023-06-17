const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api-Routes.js');
const htmlRoutes = require('./routes/html-routes.js');


const PORT = 3001;

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
