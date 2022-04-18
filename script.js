exampleBook1 = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 295,
  description: "",
  read: "read",
};

exampleBook2 = {
  title: "Kino no Tabi Volume 1",
  author: "Keiichi Sigsawa",
  pages: 208,
  description:
    "Kino, a girl with an anthropomorphic motorcycle named Hermes,travels from country to country, staying only three days in each, absorbing the great good and horrible ugliness of each part of the world.",
  read: "read",
};

let myLibrary = [exampleBook1, exampleBook2];

// Book Constructor:
function Book(title, author, pages, description, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.read = read;
}

function addBookToLibrary() {
  // take user's input and store the new book object into the myLibrary array.
  // const titleValue = document.querySelector("input#title").value;
  // const authorValue = document.querySelector("input#author").value;
  // const descValue = document.querySelector("textarea#description").value;
  // const pagesValue = document.querySelector("input#pages").value;
  // const readValue = document.querySelector("select#read-status").value;
  // const newBook = new Book(
  //   titleValue,
  //   authorValue,
  //   pagesValue,
  //   descValue,
  //   readValue
  // );
  // myLibrary.push(newBook);
  // console.table(myLibrary);

  displayBook();
}

function displayBook() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
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

const addBookBtn = document.querySelector(".submit-form");

addBookBtn.addEventListener("click", () => {
  addBookToLibrary();
});
