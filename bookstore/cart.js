import { updateCartUI } from './ui.js';

export const cart = [];

export function addToCart(book) {
  cart.push(book);
  updateCartUI();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

export function getTotal() {
  return cart.reduce((sum, book) => sum + book.price, 0);
}