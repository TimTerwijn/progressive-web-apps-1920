import * as app from "../app.js";

document.onkeydown = checkKey;
export function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {// up arrow
      app.onTopKey();
    }
    else if (e.keyCode == '37') {// left arrow
      app.onLeftKey();
    }
    else if (e.keyCode == '39') {// right arrow
      app.onRightKey();
    }else if (e.keyCode == '8') {// right arrow
      app.onBackspaceKey();
    }
}