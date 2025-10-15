import React from 'react';
import BookCard from './BookCard';

function BookList({ books }) {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">📚 Book List</h2>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;