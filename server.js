const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api-Routes.js');
const htmlRoutes = require('./routes/html-routes.js');
const importNotes = require('./db/dbNotes.json');

const PORT = 3001;

const app = express();

importNotes.forEach(note => {
  note.id = importNotes.indexOf(note) + 1;
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)

);