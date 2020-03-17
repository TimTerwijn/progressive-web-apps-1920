import {checkKey} from "./modules/controller.js";
import {register} from "./modules/register.js";
import * as render from "./modules/render.js";

function init(){
  //register service-worker.js
  register();
}

export function onLeftKey(){
  //render animation
  render.walkLeft();  
}

export function onRightKey(){
  //render animation
  render.walkRight(); 
}

export function onTopKey(){
  //render animation then do a callback
  render.playerJump();  
}

//run the app
init();