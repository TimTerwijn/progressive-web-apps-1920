// We also need express and request here
const express = require('express');
const request = require('request');
// But this time, we only call the router part of express
const router = express.Router();

// Code largely from the simple example, only app. changed into router and '/posts/' stripped from the url

// chose a subject
router.get('/', function(req, res) {
	res.render('game');
});

//user selected subject
router.get('/sub_subjects', function(req, res) {
	res.send('sub_subjects');
});

//user selected sub_subject
router.get('/sub_subjects/books', function(req, res) {
	res.send('books');
});

//user selected book
router.get('/sub_subjects/books/details', function(req, res) {
	res.send('book details');
});

// Make sure to export the router so it becomes available on imports
module.exports = router;