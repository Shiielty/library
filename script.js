// Book Constructor:
function Book(title, author, pages, description, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.read = read;
}

// take user's input and store the new book object into the myLibrary array.
function addBookToLibrary() {
  const newBook = createBookObject();
  myLibrary.push(newBook);

  if (document.querySelector(".main-wrapper") !== null) {
    const element = document.querySelector(".main-wrapper");
    element.remove();
    displayBook();
  } else {
    displayBook();
  }

  clearForm();
}

function createBookObject() {
  const titleValue = document.querySelector("input#title").value;
  const authorValue = document.querySelector("input#author").value;
  const descValue = document.querySelector("textarea#description").value;
  const pagesValue = document.querySelector("input#pages").value;
  const readValue = document.querySelector("select#read-status").value;

  const newBook = new Book(
    titleValue,
    authorValue,
    pagesValue,
    descValue,
    readValue
  );

  return newBook;
}

function displayBook() {
  const mainContent = document.querySelector(".main-content");
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main-wrapper");
  mainContent.appendChild(mainWrapper);

  myLibrary.forEach((book) => {
    const createCardWrapper = document.createElement("div");
    createCardWrapper.classList.add("card-wrapper");
    createCardWrapper.dataset.index = myLibrary.indexOf(book);
    mainWrapper.appendChild(createCardWrapper);

    const cardWrapper = document.querySelector(
      `.card-wrapper[data-index="${myLibrary.indexOf(book)}"]`
    );

    const createCardHeader = document.createElement("div");
    createCardHeader.classList.add("card-header");
    createCardHeader.dataset.index = myLibrary.indexOf(book);
    cardWrapper.appendChild(createCardHeader);

    const cardHeader = document.querySelector(
      `.card-header[data-index="${myLibrary.indexOf(book)}"]`
    );

    const createCardTitle = document.createElement("div");
    createCardTitle.classList.add("book-title");
    createCardTitle.dataset.index = myLibrary.indexOf(book);
    createCardTitle.textContent = book.title;
    cardHeader.appendChild(createCardTitle);

    const createCardAuthor = document.createElement("p");
    createCardAuthor.classList.add("book-author");
    createCardAuthor.dataset.index = myLibrary.indexOf(book);
    createCardAuthor.textContent = book.author;
    cardHeader.appendChild(createCardAuthor);

    const createCardPages = document.createElement("p");
    createCardPages.classList.add("book-pages");
    createCardPages.dataset.index = myLibrary.indexOf(book);
    createCardPages.textContent = `${book.pages} pages`;
    cardHeader.appendChild(createCardPages);

    const createCardDesc = document.createElement("p");
    createCardDesc.classList.add("book-description");
    createCardDesc.dataset.index = myLibrary.indexOf(book);
    if (book.description === "") {
      createCardDesc.textContent = book.description;
    } else {
      createCardDesc.textContent = `"${book.description}"`;
    }
    cardWrapper.appendChild(createCardDesc);

    const createCardFooter = document.createElement("div");
    createCardFooter.classList.add("card-footer");
    createCardFooter.dataset.index = myLibrary.indexOf(book);
    cardWrapper.appendChild(createCardFooter);

    const cardFooter = document.querySelector(
      `.card-footer[data-index="${myLibrary.indexOf(book)}"]`
    );

    const createCardRead = document.createElement("button");
    if (book.read === "read") {
      createCardRead.classList.add("green-button", "read-btn");
    } else {
      createCardRead.classList.add("red-button", "read-btn");
    }
    createCardRead.dataset.index = myLibrary.indexOf(book);
    createCardRead.textContent = "Read";
    cardFooter.appendChild(createCardRead);

    const createCardDelete = document.createElement("button");
    createCardDelete.classList.add("delete-btn", "black-button");
    createCardDelete.dataset.index = myLibrary.indexOf(book);
    createCardDelete.textContent = "delete";
    cardFooter.appendChild(createCardDelete);
  });
}

function clearForm() {
  document.querySelector("input#title").value = "";
  document.querySelector("input#author").value = "";
  document.querySelector("textarea#description").value = "";
  document.querySelector("input#pages").value = "";
  document.querySelector("select#read-status").value = "";

  const form = document.querySelector(".form");
  form.style.display = "none";
}

function toggleRead() {
  const readBtn = document.querySelectorAll(".read-btn");
  readBtn.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.className.includes("red-button")) {
        const cardIndex = button.dataset.index;
        myLibrary[cardIndex].read = "read";

        button.classList.remove("red-button");
        button.classList.add("green-button");
      } else {
        const cardIndex = button.dataset.index;
        myLibrary[cardIndex].read = "not-read";

        button.classList.remove("green-button");
        button.classList.add("red-button");
      }
    });
  });
}

function deleteCard() {
  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const cardIndex = button.dataset.index;
      console.table(myLibrary);
      myLibrary.splice(cardIndex, 1);
      console.table(myLibrary);
      if (document.querySelector(".main-wrapper") !== null) {
        const element = document.querySelector(".main-wrapper");
        element.remove();
        displayBook();
      } else {
        displayBook();
      }

      toggleRead();
      deleteCard();
    });
  });
}

// ####################################

const exampleBook1 = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 295,
  description: "",
  read: "read",
};

const exampleBook2 = {
  title: "Kino no Tabi Volume 1",
  author: "Keiichi Sigsawa",
  pages: 208,
  description:
    "Kino, a girl with an anthropomorphic motorcycle named Hermes,travels from country to country, staying only three days in each, absorbing the great good and horrible ugliness of each part of the world.",
  read: "not-read",
};

let myLibrary = [exampleBook1, exampleBook2];
displayBook();
toggleRead();
deleteCard();

// open and close the popout form
const openForm = document.querySelector(".open-form");
const form = document.querySelector(".form");
const closeForm = document.querySelector(".close-form");
openForm.addEventListener("click", () => {
  form.style.display = "flex";
});
closeForm.addEventListener("click", () => {
  form.style.display = "none";
});

// Add new book when user submit form
const addBookBtn = document.querySelector(".submit-form");
addBookBtn.addEventListener("click", () => {
  addBookToLibrary();
  toggleRead();
  deleteCard();
});
