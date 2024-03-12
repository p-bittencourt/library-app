import React, { useState } from "react";
import { getStoredBooks } from "../utils/Book";
import EditDialog from "./EditDialog";

const ShowLibrary = () => {
  const storedBooks = getStoredBooks();
  const [removedBook, setRemovedBook] = useState(false); // Use this state to refresh the UI after deleting a book.
  const [showDeleteNotification, setShowDeleteNotification] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const editBook = (editedBook) => {
    const updatedStoredBooks = storedBooks.map((book) =>
      book.id === editedBook.id ? editedBook : book
    );
    localStorage.setItem("library", JSON.stringify(updatedStoredBooks));
  };

  const handleCloseEditDialog = () => {
    setBookToEdit(null);
    setShowDialog(false);
  };

  const handleEditButton = (book) => {
    setBookToEdit(book);
    setShowDialog(!showDialog);
  };

  const renderBooks = (storedBooks) => {
    if (!storedBooks || storedBooks.length === 0) {
      return (
        <div className="container text-center">
          <h3 className="mt-5 section-title">No books stored</h3>
        </div>
      );
    }

    if (removedBook) {
      setRemovedBook(!removedBook);
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
            className="btn btn-white remove-button text-black"
            onClick={() => handleDeleteNotification(book)}
          >
            x
          </button>
          <button
            className="btn btn-white edit-button text-black"
            onClick={() => {
              handleEditButton(book);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    ));
  };

  const handleRemoveBook = () => {
    const newList = storedBooks.filter((book) => book.id !== bookToDelete.id);
    localStorage.setItem("library", JSON.stringify(newList));
    setRemovedBook(true);
    setShowDeleteNotification(false);
    setBookToDelete(null);
  };

  const handleDismiss = () => {
    setShowDeleteNotification(false);
    setBookToDelete(null);
  };

  const handleDeleteNotification = (book) => {
    setBookToDelete(book);
    setShowDeleteNotification(true);
  };

  return (
    <>
      <div className="container">
        <h2 className="mt-3 section-title">My Books</h2>
        {showDeleteNotification && (
          <div
            className="alert alert-danger m-3 d-flex justify-content-between align-items-center"
            role="alert"
          >
            Do you wish to delete the book from the list?
            <div className="button-container">
              <button type="button" className="btn" onClick={handleRemoveBook}>
                Yes
              </button>
              <button type="button" className="btn" onClick={handleDismiss}>
                No
              </button>
            </div>
          </div>
        )}
        <div className="container my-books mb-4">
          {bookToEdit && (
            <EditDialog
              show={showDialog}
              handleClose={handleCloseEditDialog}
              book={bookToEdit}
              editBookFunc={editBook}
            />
          )}
          {renderBooks(storedBooks)}
        </div>
      </div>
    </>
  );
};

export default ShowLibrary;
