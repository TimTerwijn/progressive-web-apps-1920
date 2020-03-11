import {checkKey} from "./modules/controller.js";
import * as render from "./modules/render.js";

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