
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
        newElement.className = "book box";
        library.appendChild(newElement);
        
        let titleElement = document.createElement('div');
        titleElement.innerHTML = obj.title;
        titleElement.className = "title box";
        newElement.appendChild(titleElement);
        
        let authorElement = document.createElement('div');
        authorElement.innerHTML = obj.author;
        authorElement.className = "author box";
        newElement.appendChild(authorElement);

        let pagesElement = document.createElement('div');
        pagesElement.innerHTML = obj.numberPages;
        pagesElement.className = "pages box";
        newElement.appendChild(pagesElement);

        let readElement = document.createElement('div');
        readElement.innerHTML = '';
        readElement.className = "read box";
        readValue = obj.readStatus
        console.log(readValue)
        newElement.appendChild(readElement);

        let readButton = document.createElement('div')
        readButton.innerHTML = 'Read';
        readButton.className = "toggle readButton";
        readElement.appendChild(readButton);

        let readingButton = document.createElement('div')
        readingButton.innerHTML = 'Reading';
        readingButton.className = "toggle readingButton";
        readElement.appendChild(readingButton);

        let notReadButton = document.createElement('div')
        notReadButton.innerHTML = 'Not Read';
        notReadButton.className = "toggle notReadButton";
        readElement.appendChild(notReadButton);


        if (readValue == "read") {
            readButton.classList.add("selected");
            readingButton.classList.remove("selected");
            notReadButton.classList.remove("selected");
        };
        readButton.onclick = function() {
            readButton.classList.add("selected");
            readingButton.classList.remove("selected");
            notReadButton.classList.remove("selected");
            readValue = "read";
            obj.readStatus ="read";
            }

        if (readValue == "reading") {
            readButton.classList.remove("selected");
            readingButton.classList.add("selected");
            notReadButton.classList.remove("selected");
        };
        readingButton.onclick = function() {
            readButton.classList.remove("selected");
            readingButton.classList.add("selected");
            notReadButton.classList.remove("selected");
            readValue = "reading";
            obj.readStatus ="reading";
            }


        if (readValue == "not read") {
            readButton.classList.remove("selected");
            readingButton.classList.remove("selected");
            notReadButton.classList.add("selected");
        };
        notReadButton.onclick = function() {
            readButton.classList.remove("selected");
            readingButton.classList.remove("selected");
            notReadButton.classList.add("selected");
            readValue = "not read";
            obj.readStatus ="not read";
            }






        // toggle.onclick = function() {

        // }

        //readingButton
        //notReadButton

        // let toggle = document.createElement('div')
        // toggle.innerHTML = 'Change Read Status';
        // toggle.className = "toggle";
        // toggle.id = book;
        // toggle.onclick = function() {

            
        //     myLibrary.splice(book,1)
        //     render(myLibrary)
        //   }
        // newElement.appendChild(close);

        let close = document.createElement('div')
        close.innerHTML = "⌫";
        close.className = "delete box";
        close.id = book;
        close.onclick = function() {
            myLibrary.splice(close.id,1)
            render(myLibrary)
          }
        newElement.appendChild(close);
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

//Add local storage

//Create a way to sort the library by "read/unread/reading"

// new book BUTTON that brings up a FORM 

//toggle read
//^^ do the same way you did etch a sketch toggle?



