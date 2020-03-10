import {checkKey} from "./modules/controller.js";
import * as render from "./modules/render.js";

export function onLeftKey(){
  //render animation
  render.walkLeft();  

  //callback to server

}

export function onRightKey(){
  //render animation
  render.walkRight(); 

  //callback to server
  
}

export function onTopKey(){
  //render animation
  render.playerJump();

  //callback to server
  
}