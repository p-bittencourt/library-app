import { v4 as uuidv4 } from "uuid";

function createBook(title, author, pages, info, read) {
  const id = uuidv4();
  return {
    id,
    title,
    author,
    pages,
    info,
    read,
  };
}

const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("library");
  return storedBooks ? JSON.parse(storedBooks) : [];
};

const clearStoredBooks = () => {
  const storedBooks = [];
  localStorage.setItem("library", JSON.stringify(storedBooks));
};

const storeBook = (book) => {
  const storedBooks = getStoredBooks();
  storedBooks.push(book);
  localStorage.setItem("library", JSON.stringify(storedBooks));
};

export { createBook, storeBook, clearStoredBooks, getStoredBooks };
