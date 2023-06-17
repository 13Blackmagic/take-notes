const exp = require("constants");
const path = require("path");
const router = require("express").Router();
exp.use(express.json());
exp.use(express.urlencoded({ extended: true }));
exp.use(exp.static('public'));
exp.use('/api', apiRoutes);
exp.use('/', htmlRoutes);
exp.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
// Route for index.html
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/index.html'))
);

// Route for notes.html
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/notes.html'))
);

// Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/../db/dbNotes.json'))
);
module.exports = router;

// route for notes.json
router.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/../db/db.json'))
    );
module.exports = router;

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/notes.html'))
);

// import express from 'express';
// create an instance of the express router
// create route for notes using "/notes"
// respond with the notes.html file
// resolve the path to the notes.html file relative to the current file
// send the file as a response
// create default route for all the other routes using "*"
// respond with the index.html file
// resolve the path to the index.html file relative to the current file
// send the file as a response
// export the router

