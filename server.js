const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/html-routes.js');

const port = process.env.PORT || 3001;

htmlRoutes.use(express.urlencoded({ extended: true }));
htmlRoutes.use(express.json());
htmlRoutes.use(express.static('public'));

const { notes } = require('./db/db.json');


const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './routes/html-routes.js'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './routes/html-routes.js'))
);

app.get('/api/notes', (req, res) => {
    res.json(notes);
});


app.listen(port, () => {
    console.log(`API server now on port ${port}!`);
  }
);


