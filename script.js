
let myLibrary = [];

function createBook(title, author, numberPages, readStatus){
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.readStatus = readStatus
    // this.info = function() {
    //     let info = `${title} by ${author}, ${numberPages}, ${readStatus} yet`
    //     return info
    // }
}


function addBookToLibrary(createBook) {
    //add something that checks if it's already in the array
    myLibrary.push(createBook);
}

//just to practice with
let newBook;
const theHobbit = new createBook('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read')
const theGreatGatsby = new createBook('The Great Gatsby', 'F. Scott Fitzgerald', '218 pages', 'read')

// let newBook = theHobbit;
addBookToLibrary(theHobbit)
addBookToLibrary(theGreatGatsby)

let lib = document.querySelector('#library');

function render(myLibrary){ //does it need an input?
    library.innerHTML = ''
    for (book in myLibrary){
        let obj = myLibrary[book];
        let newElement = document.createElement('div');
        newElement.id = obj.title;
        newElement.className = "book";
        library.appendChild(newElement);
        
        let titleElement = document.createElement('div');
        titleElement.innerHTML = obj.title;
        titleElement.className = "title";
        newElement.appendChild(titleElement);
        
        let authorElement = document.createElement('div');
        authorElement.innerHTML = obj.author;
        authorElement.className = "author";
        newElement.appendChild(authorElement);

        let pagesElement = document.createElement('div');
        pagesElement.innerHTML = obj.numberPages;
        pagesElement.className = "pages";
        newElement.appendChild(pagesElement);

        let readElement = document.createElement('div');
        readElement.innerHTML = obj.readStatus;
        readElement.className = "read";
        newElement.appendChild(readElement);
    }
}

render(myLibrary)

//code for modal & form
let modal = document.getElementById("modal");
let addBtn = document.getElementById("add");
let span = document.getElementsByClassName("close")[0];

addBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Take the input from form and make new book
let submitButton = document.getElementById("submit");

submitButton.addEventListener('click', () => {
    let form = document.getElementById("form");
    let titleValue = document.getElementById("titleForm").value;
    let authorValue = document.getElementById("authorForm").value;
    let pageValue = document.getElementById("pageForm").value;
    let readValue = document.querySelector('input[name="readStatus"]:checked').value;
    if (!titleValue || !authorValue || !pageValue ) return

    newBook = new createBook(titleValue, authorValue, pageValue, readValue)

    addBookToLibrary(newBook)
    render(myLibrary)
    console.log(myLibrary)
    modal.style.display = "none";
});

// console.log(titleValue)
// console.log(authorValue)
// console.log(pageValue)
// console.log(readValue)
// console.log(newBook)

// newBook = new createBook('Huck Finn', 'Mark Twain', '400', 'read');
// console.log(newBook)
// console.log(myLibrary)

//Also make sure the book has all the fields filled in


//newBook = book(title, author, numberPages, readStatus)
//addBookToLibrary(newBook)



//Add "in progress radio"
//Creat a way to sort the library by "read/unread/reading"





// new book BUTTON that brings up a FORM 

//toggle read

//add delete button? (specific to book)


