const myLibrary = [];

function Book(title, author, year, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.year = year;
    this.read = read;
    this.author = author
}

function addBookToLibrary(title, author, year, read) {
    let book = new Book(title, author, year, read);
    myLibrary.push(book);
}

let visibleTable = false;


function displayBooks(){
    console.log(myLibrary);
    if (myLibrary.length === 0){
        return;
    }
    const tbl = document.querySelector(".tables")
    if (!visibleTable){
        let newTable = document.createElement("table");
        let newHeaders = document.createElement("tr");
        let newHeads = document.createElement("th");
        newHeads.textContent = "Title";
        newHeaders.appendChild(newHeads);
        newHeads = document.createElement("th");
        newHeads.textContent = "Author";
        newHeaders.appendChild(newHeads);
        newHeads = document.createElement("th");
        newHeads.textContent = "Year";
        newHeaders.appendChild(newHeads);
        newHeads = document.createElement("th");
        newHeads.textContent = "Read";
        newHeaders.appendChild(newHeads);
        newHeads = document.createElement("th");
        newTable.appendChild(newHeaders);
        for (let i = 0; i < myLibrary.length; i++){
            newHeaders = document.createElement("tr");
            newHeads = document.createElement("td");
            newHeads.textContent = myLibrary[i].title;
            newHeaders.appendChild(newHeads);
            newHeads = document.createElement("td");
            newHeads.textContent = myLibrary[i].author;
            newHeaders.appendChild(newHeads);
            newHeads = document.createElement("td");
            newHeads.textContent = myLibrary[i].year;
            newHeaders.appendChild(newHeads);
            newHeads = document.createElement("td");
            newHeads.textContent = myLibrary[i].read;
            newHeaders.appendChild(newHeads);
            newHeads = document.createElement("td");
            newTable.appendChild(newHeaders);
        }
        tbl.appendChild(newTable);
        visibleTable = true;
    }else{
        let tab = document.querySelector(".tables table");
        tbl.removeChild(tab);
        visibleTable = false;
    }
}

const btn = document.querySelector(".display");
btn.addEventListener("click", displayBooks);
btn.addEventListener("click", (e) => {
    if (myLibrary.length === 0){
        return;
    }
    if (btn.textContent === "Show Table" ){
        e.target.textContent = "Hide Table";
    }else{
        e.target.textContent = "Show Table";
    }
});

const myForm = document.querySelector(".ff");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let slct = document.querySelector("select");
    let optn = document.createElement("option");
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const date = formData.get('date');
    const read = formData.get('read');
    optn.setAttribute("value", title);
    optn.textContent = title;
    slct.appendChild(optn);
    addBookToLibrary(title, author, date, read);
    displayBooks();
    displayBooks();
})


function removeBook(val){
    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].title === val){
            myLibrary.splice(i, 1);
            displayBooks();
            displayBooks();
            break;
        }
    }
}

const myFormOne = document.querySelector(".frmm");

myFormOne.addEventListener("submit", (e) => {
    e.preventDefault();
    const slct = document.querySelector("select");
    let vl = document.querySelector("select option:checked");
    slct.removeChild(vl);
    removeBook(vl.textContent);
});





