const express = require('express');
const app = express();
const port = 3000;

// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('public'));

/* GET home page. */
app.get('/', function(req, res) {
  res.render('test');
});

// Get our route file
var router = require('./routes/router');
// Tell express to use our posts.js file for /posts routes
app.use('/level', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));