const books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

const removeThisBook = event.target.dataset.item;
const newBookList = books.filter(function (item) {
    if (removeThisBook !== item) {
        return true;
    }
});
books = newBookList;
createList();


