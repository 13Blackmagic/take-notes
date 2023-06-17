const path = require('path');
const router = require('express').Router();


router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;

// create default route for all the other routes using "*"
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});






















// const express = require('express');

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

