const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Link the templating engine to the express app
app.set('view engine', 'ejs');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


// ROUTES!!!


//user selected a book, show bookdetails
app.get('/books/book/:bookId', function(req, res) {
  //get name
  const bookId = req.params.bookId;

  //search books in api
  //api info
  const urlBase = "https://zoeken.oba.nl/api/v1/details/?id=";
  const authorization = "&authorization=1e19898c87464e239192c8bfe422f280";
  const detail = "&detaillevel=default"
  const output = "&output=json";

  const url = urlBase + bookId + authorization + detail + output;

  //do an api call
  fetch(url)
  .then(data => data.text())
  .then(data => {
      const bookDetailsRecord = JSON.parse(data.trim()).record;

      const bookDetails = [];

      //check if titles exist
      if(bookDetailsRecord.titles != null){
        bookDetails.push({"name": "Titel", "value" : bookDetailsRecord.titles[0]});
      }

      //check if authors exist
      if(bookDetailsRecord.authors != null){
        bookDetails.push({"name": "Auteur", "value" : bookDetailsRecord.authors[0]});
      }

      //check if year  exist
      if(bookDetailsRecord.year != null){
        bookDetails.push({"name": "Uitgave", "value" : bookDetailsRecord.year});
      }

      //check if isbn exist
      if(bookDetailsRecord.isbn != null){
        bookDetails.push({"name": "ISBN", "value" : bookDetailsRecord.isbn[0]});
      }

      //check if languages exist
      if(bookDetailsRecord.languages != null){
        bookDetails.push({"name": "Taal", "value" : bookDetailsRecord.languages[0]});
      }

      //make book html
      let html = "";
      bookDetails.forEach(bookDetail => {
        html += `
          <div>
            <p>${bookDetail.name + ": " + bookDetail.value}</p>
          </div>
        `;
      });

      res.send(html);
    });
});

//user selected a sub-subjects, GET all books of that subject
app.get('/books/:subSubjectName', function(req, res) {
  //get name
  const subSubjectName = req.params.subSubjectName;

  //search books in api
  //api info
  const urlBase = "https://zoeken.oba.nl/api/v1/search/?q=";
  const targetGroup = "&p=jeugd"
  const authorization = "&authorization=1e19898c87464e239192c8bfe422f280";
  const detail = "&detaillevel=Minimum"
  const output = "&output=json";

  const url = urlBase + subSubjectName + targetGroup + authorization + detail + output;

  //do an api call
  fetch(url)
  .then(data => data.text())
  .then(data => {
      const books = JSON.parse(data.trim()).results

      //make html
      let html = "";
      books.forEach(book => {
        const badId1 = "842828168";
        const badId2 = "297712861";
        let imgId = null;
        
        //check if it is null for substring
        if(book.coverimages[1] != null){
          imgId = book.coverimages[1].substring(81, 90);
        }
        
        //check if there is no image, or a bad images
        if(book.coverimages[1] == null || imgId == badId1 || imgId == badId2){
          html += `
            <a class="no-img no-border" href="#books/book/${book.id}" data-id="${book.id}">
              <p>${book.titles[0]}</p>
            </a>
          `;
        }
        else{
          html += `
            <a class="no-border" href="#books/book/${book.id}" data-id="${book.id}">
              <img src="${
                book.coverimages ? book.coverimages[1] : 'Geen samenvatting'
              }">
            </a>
          `;
        }
      });
      
      res.send(html);
  }) 
});

//user selected a subject, GET sub-subjects
app.get('/:subjectName', function(req, res) {
  //get name
  const subjectName = req.params.subjectName;

	//get subjects
  const subjectObject = require("./modules/Subject.js");
  const subSubjects = subjectObject.getSubjectByName(subjectName);
	
	let html = "";
	subSubjects.value.forEach(subSubject => {
		html += `
      <a href="#books/${subSubject}"> 
        <p>${subSubject}</p>
      </a>  
			`;
	});
	
	res.send(html);
});

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));