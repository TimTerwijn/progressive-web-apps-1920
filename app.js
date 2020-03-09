const express = require('express');
const app = express();
const port = 3000;

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendFile(__dirname +'/views/test.html');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));