const PORT = process.env.PORT || 3001;
const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const fs = require('fs');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  res.json(notes => notes.id === req.params.id);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote (req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote (req.body, notes);

    res.json(note);
  }
}
);



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
