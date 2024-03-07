import { useState } from "react";
import { Book, storeBook } from "../utils/Book";

const BookRegister = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [read, setRead] = useState(false);
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let pagesValue = parseInt(pages);
    let infoValue = info;

    if (isNaN(pagesValue)) {
      pagesValue = 0;
    } else if (infoValue === "") {
      infoValue = "Book description not informed.";
    }

    const newBook = new Book(title, author, pagesValue, infoValue, read);
  };

  return (
    <>
      <div className="container">
        <h2 className="mt-3">Book Register</h2>
        <form onSubmit={handleSubmit} className="mt-3 p-3 register-form">
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">
              Book Title
            </label>
            <input
              type="text"
              className="form-control"
              id="bookTitle"
              placeholder="The Hobbit"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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
                value={pages}
                onChange={(e) => {
                  setPages(e.target.value);
                }}
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
                  checked={read}
                  onChange={() => setRead(true)}
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
                  checked={!read}
                  onChange={() => setRead(false)}
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
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            ></textarea>
          </div>
          <div className="button-container text-end">
            <button type="submit" className="btn btn-secondary">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookRegister;
