let myLibrary = [];

// Book Constructor:
function Book(author, title, pages, description, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.description = description;
  this.read = read;
}

function addBookToLibrary() {
  // take user's input and store the new book object into the myLibrary array.
}

// TODO: Write a function that loops through the array
// and display each book on the page (card).

const openForm = document.querySelector(".open-form");
const form = document.querySelector(".form");
const closeForm = document.querySelector(".close-form");

openForm.addEventListener("click", () => {
  form.style.display = "flex";
});

closeForm.addEventListener("click", () => {
  form.style.display = "none";
});
