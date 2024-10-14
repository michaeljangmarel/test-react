import React from 'react';
import { getAllBooks } from './ReactQuery';

const TestComponent = () => {
  const { data, isLoading, error } = getAllBooks();

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error fetching books: {error.message}</div>;
  }

  // Render books if data is available
  return (
    <div className="container">
      <h3>Books List</h3>
      <div className="row d-flex">
        {data.map((book) => (
          <div key={book.bookId} className="col-md-6 mb-3 mt-3">
            <div className="card">
              <div className="card-header">
                <p>Title: {book.title}</p>
              </div>
              <div className="card-body">
                {/* Additional book details can go here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestComponent;
