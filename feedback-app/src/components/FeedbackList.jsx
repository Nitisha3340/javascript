import React from 'react';
import { useSelector } from 'react-redux';

const FeedbackList = () => {
  const feedbackEntries = useSelector((state) => state.feedback.entries);

  return (
    <div className="feedback-list-section">
      <h3 className="list-title">All Feedback</h3>
      {feedbackEntries.length === 0 ? (
        <p className="no-feedback">No feedback submitted yet.</p>
      ) : (
        <div className="feedback-items">
          {feedbackEntries.map((entry) => (
            <div key={entry.id} className="feedback-item">
              <p className="rating-display">Rating: ⭐ {entry.rating}</p>
              {entry.comment && (
                <p className="comment-display">Comment: {entry.comment}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
