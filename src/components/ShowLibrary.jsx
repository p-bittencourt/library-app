import React, { useEffect, useState } from "react";
import { getStoredBooks } from "../utils/Book";
import EditDialog from "./EditDialog";

const ShowLibrary = () => {
  const storedBooks = getStoredBooks();
  const [removedBook, setRemovedBook] = useState(false); // Use this state to refresh the UI after deleting a book.
  const [showDeleteNotification, setShowDeleteNotification] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleCloseEditDialog = () => {
    setBookToEdit(null);
    setShowDialog(false);
  };

  const handleEditButton = (book) => {
    setBookToEdit(book);
    setShowDialog(!showDialog);
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
          {bookToEdit && (
            <EditDialog
              show={showDialog}
              handleClose={handleCloseEditDialog}
              book={bookToEdit}
            />
          )}
          {/* showDialog && editDialog()*/}
          {renderBooks(storedBooks)}
        </div>
      </div>
    </>
  );
};

export default ShowLibrary;

/*
Code for editing on edidDialog function

  const [showDialog, setShowDialog] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);


function editDialog() {
    console.log(typeof bookToEdit);
    console.log(bookToEdit);
    let editTitle = bookToEdit.title || "";
    /* let editAuthor = book.author || "";
    let editPages = book.pages || "";
    let editRead = book.read || false;
    let editInfo = book.info || "";
    const handleEdit = () => {
      console.log("called");
    };

    const initModal = () => {
      return setShowDialog(!showDialog);
    };

    return (
      <>
        <Modal show={showDialog}>
          <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>Book Editing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action={handleEdit()} className="edit-book">
              <div className="mb-3">
                <label htmlFor="editTitle" className="form-label">
                  Edit Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editTitle"
                  placeholder=""
                />
              </div>
              <button className="submit btn btn-secondary text-white">
                Edit Book
              </button>
            </form>
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

  /* const handleShowDialog = () => {
    return setShowDialog(!showDialog);
  }; */
