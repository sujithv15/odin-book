
    // array to store books
let myLibrary = [];
    // library display element
const libraryEl = document.querySelector('.library-class');

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
    this.info = `${this.title} by ${this.author}- page length: ${this.numPages} Finished reading: ${this.isRead}`;
}

    // New Book Button will pull up this form that takes book info and adds to list
function addBook() {
       // temporarily remove listener
    window.removeEventListener("submit", loadSubmitListener);
    const bookTitle = document.getElementById('title-form').value;
    const author = document.getElementById('author-form').value;
    const numPages = document.getElementById('numPages-form').value;
    const isRead = document.querySelector('input[name = read]:checked').value;
    const alertEl = document.getElementById('user-alert');
    alertEl.textContent = '';
        // validate user entered all inputs, or else exit addBook() and add listener again
    if (!bookTitle || !author || !numPages || !isRead) {
        console.log('input error');
            // message is set to be cleared above, so it does not stay there
        alertEl.textContent = 'Please fill out all info!';
        loadSubmitListener();
    }
    else {
        // create book object from variables that user entered in form
        const newBook = new Book(bookTitle, author, numPages, isRead);
        // push book to library
        myLibrary.push(newBook);
        // add new book to library array, which will then shown on the display
        addBookToDisplay(newBook);
        // once again load listener in case user wants to add another book
        loadSubmitListener();
    }
}

    // Add book to the DOM and display to user
function addBookToDisplay(book) {
        // create div in DOM
    const div = document.createElement('div');
        // give div an ID name for future retrieval
    div.id = `book-${myLibrary.length-1}`
        // display book info to screen
    div.textContent = book.info;
        // add book to Library, which is shown on display
    libraryEl.appendChild(div);
}
    // loads each item from library onto the page for user to see
function loadLibrary() {
    myLibrary.forEach(book => addBookToDisplay(book));
}

    // function that waits for submit button to be clicked
function loadSubmitListener() {
    window.addEventListener("submit", addBook);
}

window.onload = () => {
    loadLibrary()
    loadSubmitListener();
}


