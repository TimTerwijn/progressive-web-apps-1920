const express = require('express');
const fetch = require('node-fetch');
const subjectObject = require("./modules/Subject.js");
const htmlObject = require("./modules/Html.js");

const app = express();
const port = 3000;

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', '../client');

// Tell express to use a 'static' folder
app.use(express.static('../client/static'));

// Link the templating engine to the express app
app.set('view engine', 'ejs');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


// ROUTES!!!


//user selected a book, show bookdetails
app.get('/books/book/:bookId', function(req, res) {
  //first show user some html response
  res.write(htmlObject.printHtmlOpen());
  res.write(htmlObject.printHeadOpen());
  res.write(htmlObject.printCriticalCss());
  res.write(htmlObject.printCss());
  res.write(htmlObject.printHeadClose())
  res.write(htmlObject.printBodyOpen());

  //search books in api
  
  //api info
  const urlBase = "https://zoeken.oba.nl/api/v1/details/?id=";
  const bookId = req.params.bookId;
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

      //show user the result div
      res.write(htmlObject.printResultsOpen());

      //make book html
      bookDetails.forEach(bookDetail => {
        const result = `
          <div>
            <p>${bookDetail.name + ": " + bookDetail.value}</p>
          </div>
        `;

        // show user results
        res.write(result);
      });      

      //close the html file correctly
      res.write(htmlObject.printResultsClose());
      res.write(htmlObject.printBodyClose());
      res.write(htmlObject.printHtmlClose());

      //close response
      res.end();
    });
});

//user selected a sub-subjects, GET all books of that subject
app.get('/books/:subSubjectName', function(req, res) {
  //first show user some html response
  res.write(htmlObject.printHtmlOpen());
  res.write(htmlObject.printHeadOpen());
  res.write(htmlObject.printCriticalCss());
  res.write(htmlObject.printCss());
  res.write(htmlObject.printHeadClose())
  res.write(htmlObject.printBodyOpen());
  
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

      //show user the result div
      res.write(htmlObject.printResultsOpen());

      //make html
      let result;
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
          result = `
            <a class="no-img no-border" href="/books/book/${book.id}" data-id="${book.id}">
              <p>${book.titles[0]}</p>
            </a>
          `;
        }
        else{
          result = `
            <a class="no-border" href="/books/book/${book.id}" data-id="${book.id}">
              <img src="${
                book.coverimages ? book.coverimages[1] : 'Geen samenvatting'
              }">
            </a>
          `;
        }

        // show user results
        res.write(result);
      });
      
      

      //close the html file correctly
      res.write(htmlObject.printResultsClose());
      res.write(htmlObject.printBodyClose());
      res.write(htmlObject.printHtmlClose());

      //close response
      res.end();
  }) 
});

//user selected a subject, GET sub-subjects
app.get('/:subjectName', function(req, res) {
  //first show user some html response
  res.write(htmlObject.printHtmlOpen());
  res.write(htmlObject.printHeadOpen());
  res.write(htmlObject.printCriticalCss());
  res.write(htmlObject.printCss());
  res.write(htmlObject.printHeadClose())
  res.write(htmlObject.printBodyOpen());
  
  //get name
  const subjectName = req.params.subjectName;

	//get subjects
  const subSubjects = subjectObject.getSubjectByName(subjectName);
  
  //show user the result div
  res.write(htmlObject.printResultsOpen());

	subSubjects.value.forEach(subSubject => {
		const result = `
      <a href="/books/${subSubject}"> 
        <p>${subSubject}</p>
      </a>  
      `;
      
    // show user results
    res.write(result);
	});

  //close the html file correctly
  res.write(htmlObject.printResultsClose());
  res.write(htmlObject.printBodyClose());
  res.write(htmlObject.printHtmlClose());

  //close response
  res.end();
});

// GET all subjects.
app.get('/', function(req, res) {
  //first show user some html response
  res.write(htmlObject.printHtmlOpen());
  res.write(htmlObject.printHeadOpen());
  res.write(htmlObject.printCriticalCss());
  res.write(htmlObject.printCss());
  res.write(htmlObject.printHeadClose())
  res.write(htmlObject.printBodyOpen());

  //get results
  const subjectObject = require("./modules/Subject.js");
  const subjectNames = subjectObject.getSubjectNames();
  
  //show user the result div
  res.write(htmlObject.printResultsOpen());
 
  subjectNames.forEach(name => {
		const result = `
      <a href="/${name}"> 
        <p>${name}</p>
      </a>  
      `;

    // show user results
    res.write(result);
  });
  
  

  //close the html file correctly
  res.write(htmlObject.printResultsClose());
  res.write(htmlObject.printBodyClose());
  res.write(htmlObject.printHtmlClose());

  //close response
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));