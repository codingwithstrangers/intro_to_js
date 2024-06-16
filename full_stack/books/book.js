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
if (check_book(title)) {
    alert("This book title already exists in your collection. Please choose a different title.");
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

  const book = stored_book.find(
    (book) => book.title.toLowerCase() === search_title
  );

  //   if (book_exist) {
  //     alert("That BS is here");
  //     console.log("test01");
  //   } else {
  //     alert("That book is not here");
  //   }
  // }

  if (book) {
    alert("That BS is here");
    console.log("test01");

    // Update HTML with book details
    document.querySelector(".r_nav_results_title").textContent = book.title;
    document.querySelector(".r_nav_results_first").textContent =
      book.first_name;
    document.querySelector(".r_nav_results_last").textContent = book.last_name;
    document.querySelector(
      ".r_nav_results_page"
    ).textContent = `${book.page_total} pg`;
    document.querySelector(".r_nav_results_year").textContent = book.book_year;
    document.querySelector(".y_n_book").textContent = book.book_read;
    // activate the delete button
    const deleteButton = document.querySelector(".btn_delete");
    deleteButton.disabled = false;
    deleteButton.onclick = function () {
      delete_book(search_title);
    };
    // Activate edit button and set its click event
    const editButton = document.querySelector(".btn_edit");
    editButton.disabled = false;
    editButton.onclick = function () {
      edit_book(book);
    };
  } else {
    alert("That book is not here");
    // turn disable back on
    document.querySelector(".btn_delete").disabled = true;
    document.querySelector(".btn_edit").disabled = true;
  }
}

function delete_book(title) {
  const search_title = String(title).trim().toLowerCase();
  books = JSON.parse(localStorage.getItem("books")) || [];

  // Find the index of book to delete
  const bookIndex = books.findIndex(
    (book) => book.title.toLowerCase() === search_title
  );

  if (bookIndex > -1) {
    // Remove the book from the array
    books.splice(bookIndex, 1);
    // Update local storage
    localStorage.setItem("books", JSON.stringify(books));
    alert("Book has been deleted");

    // Clear the book details
    document.querySelector(".r_nav_results_title").textContent = "";
    document.querySelector(".r_nav_results_first").textContent = "";
    document.querySelector(".r_nav_results_last").textContent = "";
    document.querySelector(".r_nav_results_page").textContent = "";
    document.querySelector(".r_nav_results_year").textContent = "";
    document.querySelector(".y_n_book").textContent = "";
    document.querySelector(".btn_delete").disabled = true;
  }
}

// function edit_book(book) {
//   //   fill in the blanks
//   document.getElementById("edit_title").value = book.title;
//   document.getElementById("edit_first_name").value = book.first_name;
//   document.getElementById("edit_last_name").value = book.last_name;
//   document.getElementById("edit_page_total").value = book.page_total;
//   document.getElementById("edit_book_year").value = book.book_year;
//   if (book.book_read === "Yes") {
//     document.querySelector(
//       "input[name=edit_book_read][value=Yes]"
//     ).checked = true;
//   } else {
//     document.querySelector(
//       "input[name=edit_book_read][value=No]"
//     ).checked = true;
//   }
//   // Show the dialog
//   document.getElementById("editDialog").style.display = "block";

//   // Set the save button event
//   document.getElementById("save_edit").onclick = function () {
//     save_edit(book.title);
//   };
//   // Set the cancel button event
//   document.getElementById("cancel_edit").onclick = function () {
//     document.getElementById("editDialog").style.display = "none";
//   };
// }
// // add event lisner to call function


// function save_edit(originalTitle) {
//   const edited_title = document.getElementById("edit_title").value.trim();
//   const edited_first_name = document
//     .getElementById("edit_first_name")
//     .value.trim();
//   const edited_last_name = document
//     .getElementById("edit_last_name")
//     .value.trim();
//   const edited_page_total = document
//     .getElementById("edit_page_total")
//     .value.trim();
//   const edited_book_year = document
//     .getElementById("edit_book_year")
//     .value.trim();
//   const edited_book_read = document.querySelector(
//     "input[name=edit_book_read]:checked"
//   ).value;

//   if (
//     edited_title.length < 2 ||
//     edited_first_name.length < 2 ||
//     edited_last_name.length < 2 ||
//     edited_page_total.length < 1 ||
//     isNaN(edited_page_total) ||
//     edited_book_year.length < 2 ||
//     isNaN(edited_book_year)
//   ) {
//     alert("You aint do this ish right, please fill in all blanks bro");
//     return;
//   }

//   books = JSON.parse(localStorage.getItem("books")) || [];
//   const bookIndex = books.findIndex(
//     (book) => book.title.toLowerCase() === originalTitle.toLowerCase()
//   );

//   if (bookIndex > -1) {
//     books[bookIndex] = {
//       title: edited_title,
//       first_name: edited_first_name,
//       last_name: edited_last_name,
//       page_total: parseInt(edited_page_total, 10),
//       book_year: parseInt(edited_book_year, 10),
//       book_read: edited_book_read,
//     };

//     localStorage.setItem("books", JSON.stringify(books));
//     alert("Book has been updated");

//     // Hide the dialog
//     document.getElementById("editDialog").style.display = "none";

//     // Refresh the displayed book details
//     document.querySelector(".r_nav_results_title").textContent = edited_title;
//     document.querySelector(".r_nav_results_first").textContent =
//       edited_first_name;
//     document.querySelector(".r_nav_results_last").textContent =
//       edited_last_name;
//     document.querySelector(
//       ".r_nav_results_page"
//     ).textContent = `${edited_page_total} pg`;
//     document.querySelector(".r_nav_results_year").textContent =
//       edited_book_year;
//     document.querySelector(".y_n_book").textContent = edited_book_read;
//   }
// }

// document
//   .getElementById("search_btn")
//   .addEventListener("click", function (event) {
//     console.log(event);
//     const search_title = document.getElementById("search_input").value;
//     console.log(search_title);
//     search_book(search_title);
//   });


function edit_book(book) {
    // Prompt the user for new values
    const edited_title = prompt("Edit Title:", book.title);
  const edited_first_name = prompt("Edit Author's First Name:", book.first_name);
  const edited_last_name = prompt("Edit Author's Last Name:", book.last_name);
  const edited_page_total = prompt("Edit Page Total:", book.page_total);
  const edited_book_year = prompt("Edit Book Year:", book.book_year);

  let edited_book_read = "";
  while (true) {
    const read_input = prompt("Have you read this book? (Yes/No)", book.book_read);
    if (read_input.toLowerCase() === "yes" || read_input.toLowerCase() === "no") {
      edited_book_read = read_input.charAt(0).toUpperCase() + read_input.slice(1).toLowerCase();
      break;
    } else {
      alert("Please enter 'Yes' or 'No'");
    }
  }

  
    if (
      edited_title.length < 2 ||
      edited_first_name.length < 2 ||
      edited_last_name.length < 2 ||
      edited_page_total.length < 1 ||
      isNaN(edited_page_total) ||
      edited_book_year.length < 2 ||
      isNaN(edited_book_year)
    ) {
      alert("Please fill in all fields correctly");
      return;
    }
  
    books = JSON.parse(localStorage.getItem("books")) || [];
    const bookIndex = books.findIndex(
      (b) => b.title.toLowerCase() === book.title.toLowerCase()
    );
  
    if (bookIndex > -1) {
      books[bookIndex] = {
        title: edited_title,
        first_name: edited_first_name,
        last_name: edited_last_name,
        page_total: parseInt(edited_page_total, 10),
        book_year: parseInt(edited_book_year, 10),
        book_read: edited_book_read,
      };
  
      localStorage.setItem("books", JSON.stringify(books));
      alert("Book has been updated");
  
      // Refresh the displayed book details
      document.querySelector(".r_nav_results_title").textContent = edited_title;
      document.querySelector(".r_nav_results_first").textContent = edited_first_name;
      document.querySelector(".r_nav_results_last").textContent = edited_last_name;
      document.querySelector(".r_nav_results_page").textContent = `${edited_page_total} pg`;
      document.querySelector(".r_nav_results_year").textContent = edited_book_year;
      document.querySelector(".y_n_book").textContent = edited_book_read;
    }
  }

  function check_book(title) {
    const search_title = title.trim().toLowerCase();
    const stored_books = JSON.parse(localStorage.getItem("books")) || [];
  
    return stored_books.some((book) => book.title.toLowerCase() === search_title);
  }

  document.getElementById("search_btn").addEventListener("click", function (event) {
    const search_title = document.getElementById("search_input").value;
    search_book(search_title);
  });

// deleting books, before we can do this we need the right book info entered into the
// right  side of the tab and uses of the edit and delete button
