const PORT = process.env.PORT || 3001;
const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const fs = require('fs');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/notes', (req, res) => {
  console.log("/notes");
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});


app.get('/api/notes', (req, res) => {
  console.log("/api/notes");
  res.sendFile(path.join(__dirname, './db/db.json'));
});

app.get("/api/notes/:id", function (req, res) {
  console.log("/api/notes/:id");
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  res.json(notes[Number(req.params.id)]);
});


app.get('*', (req, res) => {
  console.log("*");
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/', (req, res) => {
  console.log("/");
  res.sendFile(path.join(__dirname, './public/index.html'));
});


// function createNewNote (body, notesArray) {
//   const note = body;
//   if (!Array.isArray(notesArray))
//     notesArray = [];
//     if (notesArray.length === 0)
//     notesArray.push(0);
//     body.id = notesArray[0];
//     notesArray[0]++;

//   notesArray.push(note);
//   fs.writeFileSync(
//     path.join(__dirname, './db/db.json'),
//     JSON.stringify({ notes: notesArray }, null, 2)
//   );
//   return note;
// }

app.post('/api/notes', (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let newNote = req.body;
  newNote.id = notes.length.toString();
  notes.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});





app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
