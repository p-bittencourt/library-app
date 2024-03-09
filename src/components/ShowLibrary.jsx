import React, { useState } from "react";
import { getStoredBooks } from "../utils/Book";
import { Modal } from "react-bootstrap";

const ShowLibrary = () => {
  const storedBooks = getStoredBooks();
  const [removedBook, setRemovedBook] = useState(false); // Use this state to refresh the UI after deleting a book.
  const [showDeleteNotification, setShowDeleteNotification] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  function modelDialog() {
    const initModal = () => {
      setShowDialog(!showDialog);
    };

    return (
      <>
        <Modal show={showDialog}>
          <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>React Modal Popover Example</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={initModal}>
              Close
            </button>
            <button className="btn btn-dark" onClick={initModal}>
              Store
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  const handleShowDialog = () => {
    return setShowDialog(!showDialog);
  };

  const renderBooks = (storedBooks) => {
    if (storedBooks.length === 0) {
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
            onClick={() => handleDeleteNotification(index)}
          >
            x
          </button>
          <button
            className="btn btn-white edit-button text-black"
            onClick={() => {
              handleShowDialog();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    ));
  };

  const handleRemoveBook = () => {
    const newList = storedBooks.filter((_, i) => i !== bookToDelete);
    localStorage.setItem("library", JSON.stringify(newList));
    setRemovedBook(true);
    setShowDeleteNotification(false);
    setBookToDelete(null);
  };

  const handleDismiss = () => {
    setShowDeleteNotification(false);
    setBookToDelete(null);
  };

  const handleDeleteNotification = (index) => {
    setBookToDelete(index);
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
            Do you wish to the delete the book from the list?
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
          {renderBooks(storedBooks)}
          {showDialog && modelDialog()}
        </div>
      </div>
    </>
  );
};

export default ShowLibrary;
