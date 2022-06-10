import { arrBooks, saveLocal } from "./Data.js";
import { Book } from "./Class.js";

const add = () => {
  const form = document.createElement("form");
  form.id = "add-book";
  form.action = "submit";

  const textTitle = document.createElement("input");
  textTitle.type = "text";
  textTitle.id = "title";
  textTitle.className = "input-text";
  textTitle.placeholder = "Book Title";
  textTitle.required = true;

  const textAuthor = document.createElement("input");
  textAuthor.type = "text";
  textAuthor.id = "author";
  textAuthor.className = "input-text";
  textAuthor.placeholder = "Author Name";
  textAuthor.required = true;

  const button = document.createElement("button");
  button.type = "submit";
  button.id = "add";
  button.className = "add";
  button.textContent = "Add";

  form.append(textTitle, textAuthor, button);

  const content = document.getElementById("content");
  const heading = document.createElement("h1");
  heading.textContent = "Add New Book";
  content.append(heading, form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    arrBooks.addBook(Book(arrBooks.getNewID(), title, author));
    saveLocal();
    form.reset();
    event.stopPropagation();
  });
};

export default add;
