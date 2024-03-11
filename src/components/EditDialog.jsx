import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function EditDialog({ show, handleClose, book }) {
  const [editTitle, setEditTitle] = useState(book.title);
  const [editAuthor, setEditAuthor] = useState(book.author);
  const [editPages, setEditPages] = useState(book.pages);
  const [editRead, setEditRead] = useState(book.read);
  const [editInfo, setEditInfo] = useState(book.info);

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
            <div className="mb-3">
              <label htmlFor="editAuthor" className="form-label">
                Edit Author
              </label>
              <input
                type="text"
                className="form-control"
                id="editAuthor"
                placeholder=""
                value={editAuthor}
                onChange={(e) => {
                  setEditAuthor(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="editPages" className="form-label">
                Edit Pages
              </label>
              <input
                type="text"
                className="form-control"
                id="editPages"
                placeholder=""
                value={editPages}
                onChange={(e) => {
                  setEditPages(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 row">
              <label className="col-sm-3">Read Status:</label>
              <div className="col-sm-9">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="isRead"
                    name="readStatus"
                    checked={editRead}
                    onChange={() => setEditRead(true)}
                  />
                  <label htmlFor="isRead" className="form-check-label">
                    I've read it.
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="isNotRead"
                    name="readStatus"
                    checked={!editRead}
                    onChange={() => setEditRead(false)}
                  />
                  <label htmlFor="isNotRead" className="form-check-label">
                    I haven't read it yet.
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="editInfo" className="form-label">
                Edit Book Info
              </label>
              <input
                type="text"
                className="form-control"
                id="editInfo"
                placeholder=""
                value={editInfo}
                onChange={(e) => {
                  setEditInfo(e.target.value);
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
