import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../features/feedbackslice';

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      setError('Please select a rating before submitting.');
      return;
    }

    dispatch(addFeedback({ rating, comment, id: Date.now() }));
    setRating('');
    setComment('');
    setError('');
  };

  return (
    <div className="feedback-card">
      <h2 className="card-title">Session Feedback</h2>
      {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '16px' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Rating */}
        <div className="form-group">
          <label className="form-label">Rating (1-5)</label>
          <select
            className="form-select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Comment */}
        <div className="form-group">
          <label className="form-label">Comments (Optional)</label>
          <textarea
            className="form-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
