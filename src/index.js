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
const mouseOver = () => {
  hello.innerHTML = "The Mouse is here!";
  hello.style.color = colors[1];
};
const mouseOut = () => {
  hello.innerHTML = "The Mouse is gone!";
  hello.style.color = colors[2];
};
const windowResize = () => {
  hello.innerHTML = "You just resized!";
  hello.style.color = colors[4];
};

const mouseRightClick = (event) => {
  if (event.button == 2) {
    hello.innerHTML = "That was right click!";
    hello.style.color = colors[3];
  }
};

const superEventHandler = {
  mouseOver: mouseOver,
  mouseOut: mouseOut,
  mouseRightClick: mouseRightClick,
  windowResize: windowResize
};

const hello = document.querySelector("h2");

hello.addEventListener("mouseover", superEventHandler.mouseOver);
hello.addEventListener("mouseout", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("mousedown", superEventHandler.mouseRightClick);
