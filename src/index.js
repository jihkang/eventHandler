// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const H2 = document.querySelector("h2");

const superEventHandler = {
  mouseenter: () => {
    H2.innerText = "the mouse is entered";
    H2.style.color = colors[0];
  },
  mouseleave: () => {
    H2.innerText = "the mouse is gone";
    H2.style.color = colors[1];
  },
  contextmenu: () => {
    H2.innerText = "That was right click";
    H2.style.color = colors[2];
  },
  resize: () => {
    H2.innerText = "You just resized!";
    H2.style.color = colors[3];
  }
};

console.log(superEventHandler);
console.dir(superEventHandler);
const funcKeys = Object.keys(superEventHandler);
funcKeys.forEach((item, i) => {
  if (i < 2) {
    H2.addEventListener(item, superEventHandler[item]);
  } else {
    window.addEventListener(item, superEventHandler[item]);
  }
});
