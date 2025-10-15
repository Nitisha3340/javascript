import { renderBooks } from './bookList.js';

document.addEventListener('DOMContentLoaded', () => {
  const bookContainer = document.getElementById('books');
  renderBooks(bookContainer);
});