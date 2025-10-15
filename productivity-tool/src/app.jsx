import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulated API fetch
    const data = [
      { id: '1', title: 'Atomic Habits', author: 'James Clear', description: 'A guide to building good habits.', rating: 4.8 },
      { id: '2', title: 'The Alchemist', author: 'Paulo Coelho', description: 'A story about following your dreams.', rating: 4.5 },
      { id: '3', title: 'Clean Code', author: 'Robert C. Martin', description: 'Best practices for writing clean code.', rating: 4.7 }
    ];
    setBooks(data);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;