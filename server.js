const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api-Routes.js');
const htmlRoutes = require('./routes/html-routes.js');
const notes = require('./db/db.json');

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

function createNewNote (body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function saveNotes (notesArray) {
  fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

function deleteNote (id, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function validateNote (note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

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