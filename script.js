//Checks that Local Storage is available
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    console.log("Local Storage Available");
  }
  else {
    alert("Local Storage Unavailable");
  }

//Initialize library or load library from LocalStorage
function getLibrary() {
    let myLibrary = [];
    if(localStorage.length > 0) { 
      myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    }
    return myLibrary;
  }

//Constructor to create books
function createBook(title, author, numberPages, readStatus){
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.readStatus = readStatus
}

//Adds new book to the "library"
function addBookToLibrary(createBook) {
    myLibrary.push(createBook);
}


let newBook;
let lib = document.querySelector('#library');

//Renders library on the webpage
function render(myLibrary){
    library.innerHTML = '';
    if(library.length === 0) {
        return;
      } 
    for (book in myLibrary){
        let obj = myLibrary[book];
        let newElement = document.createElement('div');
        newElement.id = obj.title;
        newElement.className = "book box";
        library.appendChild(newElement);
        
        let card = document.createElement('div');
        card.className = "card box";
        newElement.appendChild(card);

        let titleElement = document.createElement('div');
        titleElement.innerHTML = obj.title;
        titleElement.className = "title box";
        card.appendChild(titleElement);
        
        let authorElement = document.createElement('div');
        authorElement.innerHTML = obj.author;
        authorElement.className = "author box";
        card.appendChild(authorElement);

        let pagesElement = document.createElement('div');
        pagesElement.innerHTML = obj.numberPages;
        pagesElement.className = "pages box";
        card.appendChild(pagesElement);

        let readElement = document.createElement('div');
        readElement.innerHTML = '';
        readElement.className = "read box";
        readValue = obj.readStatus
        console.log(readValue)
        card.appendChild(readElement);

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
            readButton.classList.add("readSelected");
            readingButton.classList.remove("readingSelected");
            notReadButton.classList.remove("notReadSelected");
        };
        readButton.onclick = function() {
            readButton.classList.add("readSelected");
            readingButton.classList.remove("readingSelected");
            notReadButton.classList.remove("notReadSelected");
            readValue = "read";
            obj.readStatus ="read";
            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
            }

        if (readValue == "reading") {
            readButton.classList.remove("readSelected");
            readingButton.classList.add("readingSelected");
            notReadButton.classList.remove("notReadSelected");
        };
        readingButton.onclick = function() {
            readButton.classList.remove("readSelected");
            readingButton.classList.add("readingSelected");
            notReadButton.classList.remove("notReadSelected");
            readValue = "reading";
            obj.readStatus ="reading";
            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
            }

        if (readValue == "notRead") {
            readButton.classList.remove("readSelected");
            readingButton.classList.remove("readingSelected");
            notReadButton.classList.add("notReadSelected");
        };
        notReadButton.onclick = function() {
            readButton.classList.remove("readSelected");
            readingButton.classList.remove("readingSelected");
            notReadButton.classList.add("notReadSelected");
            readValue = "notRead";
            obj.readStatus ="notRead";
            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
            }

        let close = document.createElement('div');
        close.innerHTML = "⌫";
        close.className = "delete box";
        close.id = book;
        close.onclick = function() {
            myLibrary.splice(close.id,1)
            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
            render(myLibrary)
          }
        newElement.appendChild(close);
    }
}


//Modal & form
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

    addBookToLibrary(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    render(myLibrary);
    console.log(myLibrary)
    modal.style.display = "none";
});

let myLibrary = getLibrary();
render(myLibrary);




