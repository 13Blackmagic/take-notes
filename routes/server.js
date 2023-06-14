const express = require('express');
const path = require('path');
const htmlRoutes = require('./js/notes.html');

const port = process.env.PORT || 3001;

htmlRoutes.use(express.urlencoded({ extended: true }));
htmlRoutes.use(express.json());
htmlRoutes.use(express.static('public'));

const { notes } = require('./db/db.json');


const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(notes);
});


app.listen(port, () => {
    console.log(`API server now on port ${port}!`);
  }
);


