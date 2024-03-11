import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function EditDialog({ show, handleClose, book }) {
  const [editTitle, setEditTitle] = useState(book.title);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Book Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="edit-book">
            <div className="mb-3">
              <label htmlFor="editTitle" className="form-label">
                Edit Title
              </label>
              <input
                type="text"
                className="form-control"
                id="editTitle"
                placeholder=""
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              />
            </div>
            <button
              className="btn btn-secondary text-white"
              onClick={handleClose}
            >
              Edit Book
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditDialog;
