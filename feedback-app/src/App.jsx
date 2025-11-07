import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Training Program Feedback Tool</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;