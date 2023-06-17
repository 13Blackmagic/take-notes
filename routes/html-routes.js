const path = require("path");
const router = require("express").Router();

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/notes.html'))
);

// Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/notes.html'))
);
module.exports = router;

// route for notes.json
router.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/../db/db.json'))
    );
module.exports = router;



