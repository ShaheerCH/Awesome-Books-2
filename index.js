import displayList from "./modules/List.js";
import showTime from "./modules/Time.js";
import add from "./modules/Add.js";
import displayContact from "./modules/Contact.js";

showTime();
displayList();
const reset = () => {
  document.getElementById("content").innerHTML = "";
};

document.getElementById("list").addEventListener("click", (event) => {
  reset();
  displayList();
  event.stopPropagation();
});

document.getElementById("add").addEventListener("click", (event) => {
  reset();
  add();
  event.stopPropagation();
});

document.getElementById("contact-us").addEventListener("click", (event) => {
  reset();
  displayContact();
  event.stopPropagation();
});
