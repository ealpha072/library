//dom elements
let displayForm = $(".add-btn"),
    addBookForm = $(".form-div"),
    addNewBook = $(".new-book"),
    booksDiv = $(".books-div");

let myLibrary = [];

//add few books
myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
myLibrary.push(new Book('How to Loose Money', 'Alpha Emmanuel', '200', 'yes'))
myLibrary.push(new Book('The Dark Knight', 'David Omollo', '200', 'no'))
render();

//constructor
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

//event listeners
displayForm.on('click', function(e) {
    e.preventDefault();
    addBookForm.toggleClass('hide')
        //addBookForm.css("display", "block");
        //console.log('I have been clicked');
})

addNewBook.on('click', (e) => {
    e.preventDefault();
    let bktitle = $("#book-title").val(),
        bkauthor = $("#book-author").val(),
        bkpages = $("#book-author").val(),
        bkstatus = $("#book-author").val();
    if (bktitle === '' || bkauthor === '' || bkpages === '' || bkstatus === '') {
        alert("Please fill in all the form inputs");
    } else {
        //bkstatus = bkstatus.toUpperCase();
        myLibrary.push(new Book(bktitle, bkauthor, bkpages, bkstatus));
        //console.log("Success")
        booksDiv.html('')
        render();
    }
})

///RENDER FUNCTION
function render() {
    myLibrary.forEach(book => {
        let card =
            `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 card" id="book-info">
                <div class="card-body">
                    <h6>${book.title}</h6>
                    <p>By ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Read book: ${book.status}</p>
                </div>
            </div>`
        booksDiv.append(card)
    })

}