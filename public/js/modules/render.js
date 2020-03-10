import * as vars from "./vars.js";

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
    //move div to left
    const parent = document.getElementById("results");
    const child = parent.lastElementChild;
    parent.prepend(child); 
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
    //move div to right
    const parent = document.getElementById("results");
    const child = parent.firstElementChild;
    parent.append(child);
  }
}

export function playerJump(){
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

    //call to server to render
  }    
}