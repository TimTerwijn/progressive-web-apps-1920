/*** Fetching data -> refactor into module later ***/
import * as router from "./modules/router.js";
import {checkKey} from "./modules/controller.js";
import * as render from "./modules/render.js";
import * as vars from "./modules/vars.js";
import * as api from "./modules/api.js";

function init(){
  render.subjects();
}

export function onLeftKey(){
  render.walkLeft();  
}

export function onRightKey(){
  render.walkRight(); 
}

export function onTopKey(){
  const flipBox = document.getElementById("player-flip-box");

  //stop if Marco is already jumping
  let isJumping = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "marco-jump"){
      isJumping = true;
    }
  });

  if(!isJumping){
    //animate jump
    render.playerJump();
    
    //check if you are in subject menu 1, EX: Animal, country
    if(vars.menu == 1){      
      const subject = vars.subjects[1];
      
      //select subject
      subject.selected = true;

      //open subject
      render.subject(subject.value);
    }
    //check if you are in subject menu 2, EX: Horse, Dog
    else if(vars.menu == 2){
      const subjectName = vars.subjects[1].value[1];

      //search books in api
      const promise = api.fetchBookByName(subjectName);
      try{
        promise.then(books => {
          //safe books in storage
          vars.setBooks(books.results);
          
          //render books
          render.books();
        })
      }catch (err) {
          messages.innerHTML = "something went wrong.";
      }
    } 

    //check if you are in subject menu 3, EX: book 1 of horse, book 2 of horse
    else if(vars.menu == 3){
      //get book id
      const parentElement = document.getElementById("keyboard");
      const childElement = parentElement.getElementsByTagName('a')[1];
      const id = childElement.getAttribute("data-id");

      //find book details in api
      const promise = api.fetchBookById(id);
      try{
        promise.then(bookDetailsResult => {
          //save bookdetails in storage
          const bookDetailsRecord = bookDetailsResult.record;

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

          

          vars.setBookDetails(bookDetails);
          
          //render books
          render.bookDetails();

          //render summary
          if(bookDetailsRecord.summaries != null){
            render.bookSummary(bookDetailsRecord.summaries);
          }          
        })
      }catch (err) {
          messages.innerHTML = "something went wrong.";
      }      
    }

    //check if you are in subject menu 4, EX: book name, book images
    else if(vars.menu >= 4){
      //do nothing (YET)
    }
    
    //lastly go menu higher EX: animal -> dog -> book of dog
    vars.nextMenu();
  }  
}

init();