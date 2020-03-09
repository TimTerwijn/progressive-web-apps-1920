// We also need express and request here
const express = require('express');
const request = require('request');
// But this time, we only call the router part of express
const router = express.Router();

// Code largely from the simple example, only app. changed into router and '/posts/' stripped from the url

// Create a route for our overview page
router.get('/', function(req, res) {
	res.render('test');
});

// Make sure to export the router so it becomes available on imports
module.exports = router;