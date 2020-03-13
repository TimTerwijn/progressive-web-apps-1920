const express = require('express');
const app = express();
const port = 3000;

// Link the templating engine to the express app
app.set('view engine', 'ejs');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// GET all subjects.
app.get('/', function(req, res) {
  //get subjects
  const subjectObject = require("./modules/Subject.js");
  const subjectNames = subjectObject.getSubjectNames();
  
  let html = "";  
  subjectNames.forEach(name => {
		html += `
      <a href="#${name}"> 
        <p>${name}</p>
      </a>  
			`;
	});
  
  res.send(html);
});

//user selected a subject, GET sub-subjects
app.get('/:subjectName', function(req, res) {
  const subjectName = req.params.subjectName;

	//get subjects
  const subjectObject = require("./modules/Subject.js");
  const subSubjects = subjectObject.getSubjectByName(subjectName);
	
	let html = "";
	subSubjects.value.forEach(subSubject => {
		html += `
      <a href="#books/#${subSubject}"> 
        <p>${subSubject}</p>
      </a>  
			`;
	});
	
	res.send(html);
});

//user selected a sub-subjects, GET all books of that subject
app.get('/books/:subjectName', function(req, res) {

});

//user selected a book, show bookdetails
app.get('/books/book/:bookName', function(req, res) {

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));