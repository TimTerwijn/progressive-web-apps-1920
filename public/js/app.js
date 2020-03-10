import {checkKey} from "./modules/controller.js";
import * as render from "./modules/render.js";

export function onLeftKey(){
  render.walkLeft();  
}

export function onRightKey(){
  render.walkRight(); 
}

export function onTopKey(){
  render.playerJump();
}