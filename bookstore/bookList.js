import { books } from './books.js';
import { addToCart } from './cart.js';

export function renderBooks(container) {
  container.innerHTML = '';
  books.forEach((book, index) => {
    const card = document.createElement('div');
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: ₹${book.price}</p>
      <p>Status: ${book.availability}</p>
      <button ${book.availability === 'out of stock' ? 'disabled' : ''} data-index="${index}">
        Add to Cart
      </button>
      <hr>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => addToCart(books[btn.dataset.index]));
  });
}