function book(title, author, pages, readStatus) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.readStatus = readStatus
  this.id = Date.now();
}

const bookTitle = document.querySelector('.book__title--text');
const bookAuthor = document.querySelector('.book__author--text');
const bookPages = document.querySelector('.book__pages--text');
const bookReadStatus = document.querySelector('.book__readStatus--text');

const openFormBtn = document.querySelector('.addBookForm__open');
const closeFormBtn = document.querySelector('.addBookForm__close');
const addBookForm = document.querySelector('.addBookForm');
const bgFilter = document.querySelector('.bgFilter');

/* Input variables */
const inputTitle = document.querySelector('.inputTitle');
const inputAuthor = document.querySelector('.inputAuthor');
const inputPages = document.querySelector('.inputPages');

/* Button functions */
function submitForm(){
  event.preventDefault();
  let inputReadStatus = '';
  if (document.querySelector('input[name="inputReadStatus"]:checked')) {
    inputReadStatus = document.querySelector('input[name="inputReadStatus"]:checked').value;
  }

  let newBook = new book(inputTitle.value, inputAuthor.value, inputPages.value, inputReadStatus);
  renderBook(newBook);
  closeForm();
}

function openForm() {
  addBookForm.style.display = 'flex';
  bgFilter.style.display = 'block';
}

function closeForm() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  
  if (document.querySelector('input[name="inputReadStatus"]:checked')) {
    document.querySelector('input[name="inputReadStatus"]:checked').checked = false;
  }

  addBookForm.style.display = 'none';
  bgFilter.style.display = 'none';
}

function deleteCard(target) {
  let id = target.dataset.key;
  document.getElementById(id).remove();
}

function changeStatus(target) {
  let id = target.dataset.key;
  let elem = document.getElementById(id);

  if(elem.textContent === 'Yes') {
    elem.textContent = 'No';
  } else {
    elem.textContent = 'Yes';
  }
}

/* Render new book */
function renderBook(book) {
  let cards = document.querySelector('.cards');

  cards.insertAdjacentHTML('beforeend', `
  <div class="col-md-5 d-flex justify-content-center" id="${book.id}">
      <div class="card book">
          <div class="book__title">
              <span class="card__title">Title:</span>
              <span class="book__title--text">${book.title}</span>
          </div>
          <div class="book__author">
              <span class="card__title">Author:</span>
              <span class="book__author--text">${book.author}</span>
          </div>
          <div class="book__pages">
              <span class="card__title">Number of Pages:</span>
              <span class="book__pages--text">${book.pages}</span>
          </div>
          <div class="book__readStatus">
              <span class="card__title">Book Read:</span>
              <span class="book__readStatus--text" id="ST${book.id}">${book.readStatus}</span>
          </div>
          <div class="d-flex justify-content-center mt-2">
              <button class="btn btn-danger mx-auto deleteCard" data-key="${book.id}" onclick="deleteCard(this)">Delete</button>
              <button class="btn btn-primary mx-auto changeStatus" data-key="ST${book.id}" onclick="changeStatus(this)">Change</button>
          </div>
      </div>
  </div>
  `);
}
