import { useState } from "react";
import { Book, storeBook } from "../utils/Book";

const BookRegister = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [read, setRead] = useState(false);
  const [info, setInfo] = useState("");

  return (
    <>
      <div className="container">
        <h2 className="mt-3">Book Register</h2>
        <form action="" className="mt-3 p-3">
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">
              Book Title
            </label>
            <input
              type="text"
              className="form-control"
              id="bookTitle"
              placeholder="The Hobbit"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookAuthor" className="form-label">
              Book Author
            </label>
            <input
              type="text"
              className="form-control"
              id="bookAuthor"
              placeholder="JRR Tolkien"
              required
            />
          </div>
          <div className="mb-3 row">
            <label htmlFor="bookPages" className="col-sm-3 col-form-label">
              Number of Pages
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                id="bookPages"
                placeholder="310"
              />
            </div>
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
                  defaultChecked
                />
                <label htmlFor="isNotRead" className="form-check-label">
                  I haven't read it yet.
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="bookInfo" className="form-label">
              Write some information about the book:
            </label>
            <textarea
              name="bookInfo"
              id="bookInfo"
              rows="5"
              className="form-control"
              placeholder="The Hobbit, or There and Back Again is a children's fantasy novel by the English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim."
            ></textarea>
          </div>
          <div className="button-container text-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookRegister;
