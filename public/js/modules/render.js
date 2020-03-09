import * as vars from "./vars.js";
import * as api from "./api.js";

//render list of subjects
export function subjects(){
  //get keyboard parent
  const parent = document.getElementById('keyboard');
  
  //clear parent
  parent.innerHTML = "";

  //add data
  for (let index = 0; index < 3; index++) {
    //check for index out of bounds
    const html = `
            <section>
              <p>
              ${
                vars.subjects[index].name
              }
              </p>
            </section>
          `;

    parent.insertAdjacentHTML('beforeend', html);    
  } 
}

//render more of that subject
export function subject(subject){
  //get keyboard parent
  const parent = document.getElementById('keyboard');
  
  //clear parent
  parent.innerHTML = "";

  //add data
  for (let index = 0; index < 3; index++) {
    //check for index out of bounds
    const html = `
            <section>
              <p>
              ${
                subject[index]
              }
              </p>
            </section>
          `;

    parent.insertAdjacentHTML('beforeend', html);    
  } 
}

export function walkLeft(){
  const flipBox = document.getElementById("player-flip-box");  
  
  //check if Marco does't looks at the left direction
  let looksLeft = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "flip-box"){
      looksLeft = true;
    }
  });

  //check if Marco does't looks at the left direction
  if(!looksLeft){
      //animate Marco
      flipBox.classList.add("flip-box");
  }else{
    //move array to left

    //check if you are in subject menu 1, EX: Animal, country
    if(vars.menu == 1){
      vars.subjects.unshift(vars.subjects.splice(vars.subjects.length - 1, 1)[0]);
      
      //rerender subjects
      subjects();
    }
    //check if you are in subject menu 2, EX: Horse, Dog
    else if(vars.menu == 2){
      //subject is already selected
      const subject = vars.subjects[1].value;
      
      subject.unshift(subject.splice(subject.length - 1, 1)[0]);

      //rerender subjects
      this.subject(subject);
    }
    //check if you are in subject menu 3, EX: book 1 of horse, book 2 of horse
    else if(vars.menu == 3){
      //swap books
      vars.books.unshift(vars.books.splice(vars.books.length - 1, 1)[0]);
          
      //render books
      books();
    }
    //check if you are in subject menu 4, EX: image of book, name of book
    else if(vars.menu >= 4){
      //swap books
      vars.bookDetails.unshift(vars.bookDetails.splice(vars.bookDetails.length - 1, 1)[0]);
          
      //render books
      bookDetails();
    }
  }
}

export function walkRight(){
  const flipBox = document.getElementById("player-flip-box");  

  //check if Marco looks at the left direction
  let looksLeft = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "flip-box"){
      looksLeft = true;
    }
  });

  if(looksLeft){
    //animate Marco to look right
    flipBox.classList.remove("flip-box");
  }else{
    //move array to right

    //check if you are in subject menu 1, EX: Animal, country
    if(vars.menu == 1){
      vars.subjects.push(vars.subjects.splice(0, 1)[0]);
      
      //rerender subjects
      subjects();
    }
    //check if you are in subject menu 2, EX: Horse, Dog
    else if(vars.menu == 2){
      //subject is already selected
      const subject = vars.subjects[1].value;
      
      subject.push(subject.splice(0, 1)[0]);

      //rerender subjects
      this.subject(subject);
    }
    //check if you are in subject menu 3, EX: book 1 of horse, book 2 of horse
    else if(vars.menu == 3){
      //swap books
      vars.books.push(vars.books.splice(0, 1)[0]);
          
      //render books
      books();
    }
    //check if you are in subject menu 4, EX: image of book, name of book
    else if(vars.menu >= 4){
      //swap books
      vars.bookDetails.push(vars.bookDetails.splice(0, 1)[0]);
          
      //render books
      bookDetails();
    }
  }
}

export function playerJump(){
  const flipBox = document.getElementById("player-flip-box");

  //check if Marco is already jumping
  let isJumping = false;
  flipBox.classList.forEach(classItem => {
    if(classItem == "marco-jump"){
      isJumping = true;
    }
  });

  //if marco does not jump
  if(!isJumping){
    flipBox.classList.add("marco-jump");

    //wait for animation to compleet, then remove class
    const promise = vars.sleep(2000);
    promise.then(function(){
      flipBox.classList.remove("marco-jump");
    })  
  }  
}

// render books
export function books() {
  //get books
  const books = vars.books;

  //check if books is atleast 5 width
  if(books.length < 3){
    const loops = 3 - books.length;
    for (let index = 0; index < loops; index++) {
      books[books.length] = {
        "id" : "",
        "coverimages" : "https",
      }
    }
  }
  
  //get parent
  const parent = document.getElementById('keyboard');
  
  //empty parent
  parent.innerHTML = "";

  //render books
  for (let index = 0; index < 3; index++) {
    const item = books[index];

    const badId1 = "842828168";
    const badId2 = "297712861";
    let imgId = null;
    
    //check if it is null for substring
    if(item.coverimages[1] != null){
      imgId = item.coverimages[1].substring(81, 90);
    }

    let html = "";
    
    //check if there is no image, or a bad images
    if(item.coverimages[1] == null || imgId == badId1 || imgId == badId2){
      html = `
        <a class="no-img" href="#details/${item.id}" data-id="${item.id}">
          <p>${item.titles[0]}</p>
        </a>
      `;
    }
    else{
      html = `
        <a href="#details/${item.id}" data-id="${item.id}">
          <img src="${
            item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
          }">
        </a>
      `;
    }
    
    parent.insertAdjacentHTML('beforeend', html);
  }
}

function toggleVisibility(element){
  element.classList.toggle("hidden");
}

function hide(element){
  element.className = "hidden";
}

function hideAllPages(){
  const searchPage = document.getElementById("search_page");

  hide(searchPage);
}

export function searchPage(){
  //hide all pages
  hideAllPages();

  //show start page
  const searchPage = document.getElementById("search_page");
  toggleVisibility(searchPage);
}

export function bookDetails(){
  //get parent
  const parent = document.getElementById('keyboard');
  
  //empty parent
  parent.innerHTML = "";

  const bookDetails = vars.bookDetails;

  //render book details under book
  for (let index = 0; index < 3; index++) {
    const bookDetail = bookDetails[index];
    //render book
    const html = `
      <div><p>${bookDetail.name + ": " + bookDetail.value}</p></div>
    `;

    parent.insertAdjacentHTML('beforeend', html);
  }
}

export function bookSummary(summaries){
  //render book sumary under page
  const messages = document.getElementById("messages");
  messages.innerHTML = "";
  
  summaries.forEach(summary => {
    const html = `
        <p>${summary}</p>
      `;    
    
    messages.insertAdjacentHTML('beforeend', html);
  });
}