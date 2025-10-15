import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetail({ books }) {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) {
    return <p className="text-center mt-10">Book not found.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-1">Author: {book.author}</p>
      <p className="mb-2">{book.description}</p>
      <p className="font-semibold">Rating: ⭐ {book.rating}</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">← Back to list</Link>
    </div>
  );
}

export default BookDetail;