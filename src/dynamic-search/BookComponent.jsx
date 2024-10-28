import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function Book() {
  const  books = [
    "The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Moby Dick",
    "Pride and Prejudice",
    "War and Peace",
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the books based on the search term
  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Book Search</h1>
      
      {/* Input box for searching */}
      <input
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: '8px', width: '300px', fontSize: '16px' }}
      />
      
      {/* Display the filtered list dynamically */}
      <ul style={{ marginTop: '20px' }}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => <li key={index}>{book}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default Book;
