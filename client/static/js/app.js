import {checkKey} from "./modules/controller.js";
import * as router from "./modules/router.js";
import * as render from "./modules/render.js";
import * as server from "./modules/server.js";

function init(){
  //get first data from server
  const path = "/"
  server.get()

  //render data
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