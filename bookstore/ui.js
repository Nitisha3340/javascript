import { cart, removeFromCart, getTotal } from './cart.js';

export function updateCartUI() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '<h2>🛒 Cart</h2>';

  if (cart.length === 0) {
    cartContainer.innerHTML += '<p>Cart is empty.</p>';
    return;
  }

  cart.forEach((book, index) => {
    const item = document.createElement('div');
    item.innerHTML = `
      <strong>${book.title}</strong> - ₹${book.price}
      <button data-index="${index}">Remove</button>
    `;
    cartContainer.appendChild(item);
  });

  const total = document.createElement('p');
  total.innerHTML = `<strong>Total: ₹${getTotal()}</strong>`;
  cartContainer.appendChild(total);

  cartContainer.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.index));
  });
}