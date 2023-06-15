const router = require('express').Router();
const express = require('express');;
const path = require('path');
const app = express();
const notes = require('../db/db.json');

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/notes.html'))
);





router.get('/notes', (req, res) => {
  notes.json.getNote()
  .then((notes) =>{
    return res.json(notes)
  })
});

router.post('/notes', (req, res) => {
  notes.json.getNote()
  .then((notes) =>{
    return res.json(notes)
  })
});

router.delete('/notes/:id', (req, res) => {
  notes.json.getNote()
  .then((notes) =>{
    return res.json(notes)
  })
});

module.exports = router;