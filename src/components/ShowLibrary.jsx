import React from "react";
import { getStoredBooks, storeBook } from "../utils/Book";

const ShowLibrary = () => {
  const storedBooks = getStoredBooks();

  const handleRemoveBook = (index) => {
    const newList = storedBooks.filter((_, i) => i !== index);
    localStorage.setItem("library", JSON.stringify(newList));
    window.location.reload();
  };

  const renderBooks = (storedBooks) => {
    if (storedBooks.length === 0) {
      return (
        <div className="container text-center">
          <h3>No books stored</h3>
        </div>
      );
    }

    return storedBooks.map((book, index) => (
      <div className="card mt-3" key={index}>
        <div className="card-body book-card">
          <h5 className="card-title">{book.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {book.author}
          </h6>
          <p className="card-text">{book.info}</p>
          <p className="card-text">Pages: {book.pages}</p>
          <button
            className="btn btn-secondary remove-button text-white"
            onClick={() => handleRemoveBook(index)}
          >
            x
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container">
        <h2 className="mt-3">My Books</h2>
        <div className="container my-books mb-4">
          {renderBooks(storedBooks)}
        </div>
      </div>
    </>
  );
};

export default ShowLibrary;
