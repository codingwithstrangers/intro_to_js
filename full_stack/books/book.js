// We want to make the left and right nav bar open and close (70/30)
// make history tab upload last add book
// functon for adding book to json file
var books = [];
window.addEventListener("load", () => {
  books = JSON.parse(localStorage.getItem("books") || "[]");
});
function submitform() {
  const title = document.querySelector(".nav_input_title").value.trim();
  const first_name = document.querySelector(".nav_input_first").value.trim();
  const last_name = document.querySelector(".nav_input_last").value.trim();
  const page_total = document.querySelector(".nav_input_page").value.trim();
  const book_year = document.querySelector(".nav_input_year").value.trim();
  const book_read = document.querySelector("input[name=bookRead]:checked");
  //  check to make sure all fields are not empty
  if (
    title.length < 2 ||
    first_name.length < 2 ||
    last_name.length < 2 ||
    page_total.length < 1 ||
    isNaN(page_total) ||
    book_year.length < 2 ||
    isNaN(book_year)
  ) {
    // alert for the f ups in the back
    alert("You aint do this ish right, please fill in all blacks bro");
    return;
  }

  if (!book_read) {
    alert("Ayo check one of them boxes");
    return;
  }
  // create JSON for object data
  const book_data = {
    title: title,
    first_name: first_name,
    last_name: last_name,
    page_total: parseInt(page_total, 10),
    book_year: parseInt(book_year, 10),
    book_read: book_read.value,
  };

  // confirm loging
  const book_data_json = JSON.stringify(book_data);
  console.log(book_data_json);
  // calling save function
  add_book(book_data);
  alert("book has been added");
}

function add_book(book_data) {
  books.push(book_data);
  localStorage.setItem("books", JSON.stringify(books));
}

// find way of searching book (book title)
function search_book(title) {
  const search_title = String(title).trim().toLowerCase();
  const stored_book = JSON.parse(localStorage.getItem("books")) || [];
  // check if book is there
  const book_exist = stored_book.some(
    (book) => book.title.toLowerCase() === search_title
  );
  if (book_exist) {
    alert("That BS is here");
    console.log("test01");
  } else {
    alert("That book is not here");
  }  
}

// add event lisner to call function
document
.getElementById("search_btn")
.addEventListener("click", function (event) {
  console.log(event);
  const search_title = document.getElementById("search_input").value;
  console.log(search_title)
  search_book(search_title);
});

// deleting books, before we can do this we need the right book info entered into the 
// right  side of the tab and uses of the edit and delete button 

