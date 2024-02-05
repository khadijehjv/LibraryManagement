import {members} from '../app.js'




const bookSection = document.getElementById('bookSection');
const bookList = document.getElementById('bookList');



function showBooks() {
  const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
  ];

  bookList.innerHTML = books.map(book => `
    <li>
      <span>${book.title} by ${book.author}</span>
      <button onclick="borrowBook('${book.title}')">Borrow</button>
    </li>
  `).join('');

  bookSection.style.display = 'block';
}

function borrowBook(title) {
  alert(`You borrowed the book: ${title}`);

}
