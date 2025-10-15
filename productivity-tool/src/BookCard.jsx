import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="border p-4 mb-4 rounded shadow hover:bg-gray-50">
      <h3 className="text-xl font-semibold">{book.title}</h3>
      <p className="text-gray-600">Author: {book.author}</p>
      <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;