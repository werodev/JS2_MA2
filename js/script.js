let books = [];
const addTitle = document.querySelector(".title");
const addIsbn = document.querySelector(".isbn");
const button = document.querySelector(".add");

button.addEventListener("click", addToRepo);

function addToRepo() {
    const title = addTitle.value.trim();
    const isbn = addIsbn.value.trim();

    if (isbn.length === 13) {
        const newBook = { title: title, isbn: isbn };
        books.push(newBook);
        createList();
        newBook.value = "";
        console.log(books);
    } else {
        alert("Invalid Isbn number, it should be 13 characters long");
    };
}

function createList() {
    const bookRepo = document.querySelector("ul");

    bookRepo.innerHTML = "";
    books.forEach(function (item) {
        bookRepo.innerHTML += `<li><span>Title:${item.title}</span>
        <span>Isbn:${item.isbn}</span><i class="fa-solid fa-trash-can" data-item="${item.title}"></i></li>`
    });
    const trashCans = document.querySelectorAll(".fa-solid");
    console.log(trashCans.length);
    trashCans.forEach(function (bookToRemove) {
        bookToRemove.addEventListener('click', removeBook);
    });

}

function removeBook() {
    console.log(figure);
    const removeThisBook = figure.target.dataset.item;
    const newBooksList = books.filter(function (item) {
        if (removeThisBook !== item.title) {
            return true;
        }
    });
    books = newBooksList;
    createList();
}

