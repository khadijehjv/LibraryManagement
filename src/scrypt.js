const loginForm = document.getElementById('loginForm');
const bookSection = document.getElementById('bookSection');
const bookList = document.getElementById('bookList');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // For demonstration purposes, let's assume a successful login.
  showBooks();
});

function showBooks() {
  // For demonstration purposes, let's assume these are the available books.
  const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
  ];

  // Display the books in the list.
  bookList.innerHTML = books.map(book => `
    <li>
      <span>${book.title} by ${book.author}</span>
      <button onclick="borrowBook('${book.title}')">Borrow</button>
    </li>
  `).join('');

  // Show the book section.
  bookSection.style.display = 'block';
}

function borrowBook(title) {
  alert(`You borrowed the book: ${title}`);
  // You can add further logic for handling book borrowing.
}
